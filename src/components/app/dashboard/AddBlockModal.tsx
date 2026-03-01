import React, { useState } from 'react';
import { createTimeBlock } from '../../../api/timeBlocksApi';

interface AddBlockModalProps {
  onClose: () => void;
  onCreated?: () => void;
}

const AddBlockModal = ({ onClose, onCreated }: AddBlockModalProps) => {
  // 1. Basic Info
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Study'); // Default to Study
  
  // 2. Time & Breaks
  const [duration, setDuration] = useState(25); 
  const [breakCount, setBreakCount] = useState(1); // Default 1 break
  const [breakDuration, setBreakDuration] = useState(5); // Default 5 min break
  
  // 3. Scheduling
  const [scheduleType, setScheduleType] = useState<'now' | 'later'>('now');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  // Helper arrays for our quick-select buttons
  const categories = ['Study', 'Work', 'Reading', 'Coding', 'Writing', 'Other'];
  const breakDurations = [5, 10, 15];

  const handleCreate = async () => {
    let scheduledStartIso: string | undefined = undefined;
    if (scheduleType === 'later' && scheduledDate && scheduledTime) {
      const dateTime = new Date(`${scheduledDate}T${scheduledTime}`);
      scheduledStartIso = dateTime.toISOString();
    }

    try {
      await createTimeBlock({
        title,
        category,
        durationMinutes: duration,
        breakCount,
        breakDuration,
        scheduledStart: scheduledStartIso,
      });
      if (onCreated) onCreated();
    } catch (err) {
      console.error(err);
      alert('Failed to save block');
    }
    
    onClose();
  };

  return (
    /* Modal Container   removed backdrop-blur-sm for performance reason */
    <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto">
      {/* Increased max-width because we have more fields now */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Configure Focus Block</h2>
            <p className="text-xs text-gray-500 mt-0.5">Set up your next deep work session</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body Container - Made scrollable in case screen is small */}
        <div className="p-5 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Task Name</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Studying X"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      category === cat 
                        ? 'bg-[#1a1a1a] text-white shadow-md' 
                        : 'bg-white border text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Time & Breaks */}
          <div className="grid grid-cols-2 gap-5">
            {/* Left Col: Focus Time */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700">Focus Duration</label>
              <div className="grid grid-cols-2 gap-2">
                {[15, 25, 45, 60].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDuration(mins)}
                    className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                      duration === mins ? 'bg-indigo-50 text-indigo-700 border-2 border-indigo-200' : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Breaks */}
            <div className="space-y-4">
              {/* How many breaks? */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Number of Breaks</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setBreakCount(Math.max(0, breakCount - 1))}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="w-4 text-center font-bold">{breakCount}</span>
                  <button 
                    onClick={() => setBreakCount(breakCount + 1)}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Break Duration (Only show if they want breaks) */}
              {breakCount > 0 && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Break Length</label>
                  <div className="flex gap-2">
                    {breakDurations.map((mins) => (
                      <button
                        key={mins}
                        onClick={() => setBreakDuration(mins)}
                        className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
                          breakDuration === mins ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-gray-50 text-gray-500 border border-transparent hover:bg-gray-100'
                        }`}
                      >
                        {mins}m
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Scheduling */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700">When do you want to do this?</label>
            <div className="flex p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setScheduleType('now')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${scheduleType === 'now' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
              >
                Start Now
              </button>
              <button
                onClick={() => setScheduleType('later')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${scheduleType === 'later' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
              >
                Schedule Later
              </button>
            </div>

            {/* Date/Time Pickers (Only show if scheduling for later) */}
            {scheduleType === 'later' && (
              <div className="grid grid-cols-2 gap-3 mt-3 animate-in fade-in slide-in-from-top-2">
                <input 
                  type="date" 
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-black"
                />
                <input 
                  type="time" 
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-black"
                />
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
          <div className="text-xs text-gray-500 font-medium">
            Total Time: <span className="text-gray-900 font-bold">{duration + (breakCount * breakDuration)} mins</span>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreate}
              disabled={!title.trim() || (scheduleType === 'later' && (!scheduledDate || !scheduledTime))}
              className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-2"
            >
              {scheduleType === 'now' ? (
                <>
                  Start Session
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </>
              ) : (
                'Save to Calendar'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddBlockModal;
