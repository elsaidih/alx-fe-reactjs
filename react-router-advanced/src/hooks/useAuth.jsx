import { useState } from "react";

function useAuth() {
  // Simulated authentication state
  const [isAuthenticated] = useState(false);

  return { isAuthenticated };
}

export default useAuth;