import React, { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUserData } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

// Create the context
const UserDataContext = createContext();

// Custom hook to use the user data context
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

// Provider component
export const UserDataProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (user) {
      setLoading(true);
      setError(null);
      try {
        const { userData: data, error: fetchError } =
          await getCurrentUserData();
        if (data && !fetchError) {
          setUserData({
            ...data,
            xp: data.xp || 0,
            email: user.email,
            uid: user.uid,
          });
        } else {
          setError(fetchError || "Failed to fetch user data");
          setUserData({
            xp: 0,
            email: user.email,
            uid: user.uid,
          });
        }
      } catch (err) {
        setError(err.message);
        setUserData({
          xp: 0,
          email: user.email,
          uid: user.uid,
        });
      }
      setLoading(false);
    } else {
      setUserData(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setLoading(true);
        setError(null);
        try {
          const { userData: data, error: fetchError } =
            await getCurrentUserData();
          if (data && !fetchError) {
            setUserData({
              ...data,
              xp: data.xp || 0,
              email: user.email,
              uid: user.uid,
            });
          } else {
            setError(fetchError || "Failed to fetch user data");
            setUserData({
              xp: 0,
              email: user.email,
              uid: user.uid,
            });
          }
        } catch (err) {
          setError(err.message);
          setUserData({
            xp: 0,
            email: user.email,
            uid: user.uid,
          });
        }
        setLoading(false);
      } else {
        setUserData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  // Function to refresh user data manually
  const refreshUserData = () => {
    fetchUserData();
  };

  // Helper functions for XP-based features
  const getRequiredXPForStage = (stageNumber) => {
    return stageNumber * 100; // Each stage requires 100 more XP than the previous
  };

  const canAccessStage = (stageNumber) => {
    if (!userData) return false;
    return userData.xp >= getRequiredXPForStage(stageNumber - 1); // Stage 1 requires 0 XP, Stage 2 requires 100 XP, etc.
  };

  const isTaskCompleted = (taskId) => {
    if (!userData) return false;
    const requiredXP = taskId * 100;
    return userData.xp >= requiredXP;
  };

  const value = {
    userData,
    loading,
    error,
    refreshUserData,
    getRequiredXPForStage,
    canAccessStage,
    isTaskCompleted,
    userXP: userData?.xp || 0,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
