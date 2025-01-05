"use client";

import React from "react";

export default function EspaceEntrepriseLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return <div className="min-h-screen">{children}</div>;
}
