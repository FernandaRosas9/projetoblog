"use client";

import { useState, useEffect } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  doc,
  setDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { Auth, getAuth, signInAnonymously } from "firebase/auth";

// Define os tipos das props do componente Reactions
type ReactionsProps = {
  postId: string;
  onReaction: () => void;
};

// Define o tipo dos dados no Firestore
type Reactions = {
  likes: number;
};

// Obtenha as variáveis de ambiente com um fallback
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

// Inicializa o Firebase apenas no lado do cliente
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  signInAnonymously(auth);
}

export default function Reactions({ postId, onReaction }: ReactionsProps) {
  const [likes, setLikes] = useState(0);
  const [hasFaved, setHasFaved] = useState(false);
  const [hasLoved, setHasLoved] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Acessa o ID do usuário de forma segura e o cria se não existir
    let currentUserId = localStorage.getItem("userId");
    if (!currentUserId) {
      currentUserId = `anon-${Math.random().toString(36).slice(2, 11)}`;
      localStorage.setItem("userId", currentUserId);
    }
    setUserId(currentUserId);

    // Verifica o localStorage para o estado atual das reações do usuário
    setHasFaved(
      localStorage.getItem(`faved-${currentUserId}-${postId}`) === "true"
    );
    setHasLoved(
      localStorage.getItem(`loved-${currentUserId}-${postId}`) === "true"
    );
    setHasLiked(
      localStorage.getItem(`liked-${currentUserId}-${postId}`) === "true"
    );

    if (db) {
      const docRef = doc(db, "blogPosts", postId);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as Reactions;
          setLikes(data.likes || 0);
        } else {
          setLikes(0);
        }
      });
      return () => unsubscribe();
    }
  }, [postId]);

  const handleReaction = async (reactionType: "like" | "fav" | "loved") => {
    if (!userId || !db) return;

    if (reactionType === "like") {
      const docRef = doc(db, "blogPosts", postId);
      const newHasLiked = !hasLiked;
      setHasLiked(newHasLiked);

      try {
        if (newHasLiked) {
          await setDoc(docRef, { likes: increment(1) }, { merge: true });
          localStorage.setItem(`liked-${userId}-${postId}`, "true");
        } else {
          await setDoc(docRef, { likes: increment(-1) }, { merge: true });
          localStorage.removeItem(`liked-${userId}-${postId}`);
        }
        onReaction();
      } catch (e) {
        console.error("Erro ao adicionar 'like': ", e);
      }
    } else if (reactionType === "fav") {
      const newHasFaved = !hasFaved;
      setHasFaved(newHasFaved);
      if (newHasFaved) {
        localStorage.setItem(`faved-${userId}-${postId}`, "true");
      } else {
        localStorage.removeItem(`faved-${userId}-${postId}`);
      }
      onReaction();
    } else if (reactionType === "loved") {
      const newHasLoved = !hasLoved;
      setHasLoved(newHasLoved);
      if (newHasLoved) {
        localStorage.setItem(`loved-${userId}-${postId}`, "true");
      } else {
        localStorage.removeItem(`loved-${userId}-${postId}`);
      }
      onReaction();
    }
  };

  return (
    <div className="flex space-x-4 mt-4 text-gray-600">
      <button
        onClick={() => handleReaction("like")}
        className={`flex items-center space-x-1 transition-colors ${
          hasLiked ? "text-blue-500" : "text-gray-400 grayscale"
        }`}
      >
        <span>👍</span>
        <span>{likes}</span>
      </button>

      <button
        onClick={() => handleReaction("fav")}
        className={`flex items-center space-x-1 transition-colors ${
          hasFaved ? "text-yellow-500" : "text-gray-400 grayscale"
        }`}
      >
        <span>⭐</span>
        <span>Favoritar</span>
      </button>

      <button
        onClick={() => handleReaction("loved")}
        className={`flex items-center space-x-1 transition-colors ${
          hasLoved ? "text-red-500" : "text-gray-400 grayscale"
        }`}
      >
        <span>❤️</span>
        <span>Amei!</span>
      </button>
    </div>
  );
}
