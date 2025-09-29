"use client";

import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

export default function FirebaseDiagnostic() {
  const [diagnostics, setDiagnostics] = useState({});

  useEffect(() => {
    const runDiagnostics = () => {
      const results = {
        authInstance: !!auth,
        appInstance: !!auth?.app,
        projectId: auth?.app?.options?.projectId || "Not found",
        authDomain: auth?.app?.options?.authDomain || "Not found",
        apiKey: auth?.app?.options?.apiKey ? "Present" : "Missing",
        timestamp: new Date().toLocaleString(),
      };

      setDiagnostics(results);
      console.log("Firebase Diagnostics:", results);
    };

    runDiagnostics();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          Firebase Configuration Diagnostics
        </h1>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Auth Instance:</span>
            <span
              className={
                diagnostics.authInstance ? "text-green-600" : "text-red-600"
              }
            >
              {diagnostics.authInstance ? "✅ Present" : "❌ Missing"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">App Instance:</span>
            <span
              className={
                diagnostics.appInstance ? "text-green-600" : "text-red-600"
              }
            >
              {diagnostics.appInstance ? "✅ Present" : "❌ Missing"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Project ID:</span>
            <span>{diagnostics.projectId}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Auth Domain:</span>
            <span>{diagnostics.authDomain}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">API Key:</span>
            <span
              className={
                diagnostics.apiKey === "Present"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {diagnostics.apiKey}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Timestamp:</span>
            <span>{diagnostics.timestamp}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">
            If you see configuration issues:
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
            <li>
              Go to{" "}
              <a
                href="https://console.firebase.google.com"
                className="underline"
              >
                Firebase Console
              </a>
            </li>
            <li>Select your project "followerscrape-533b5"</li>
            <li>Go to "Authentication" in the left sidebar</li>
            <li>Click "Get started" if Authentication is not enabled</li>
            <li>Go to the "Sign-in method" tab</li>
            <li>Enable "Email/Password" authentication</li>
            <li>Save the changes and try again</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
