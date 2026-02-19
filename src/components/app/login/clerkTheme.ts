export const clerkAppearance = {
  variables: {
    colorPrimary: "#000000",
    colorTextOnPrimaryBackground: "#ffffff",
    colorBackground: "transparent",
  },
  elements: {
    rootBox: "w-full",
    card: "w-full",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    footerAction: "hidden",
    footer: "hidden",
  },
  layout: {
    socialButtonsPlacement: "top",
    showOptionalFields: false,
  },
} as const;
