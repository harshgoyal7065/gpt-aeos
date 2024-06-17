// lib/auth.ts

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string; // Replace with your actual secret

export const verifyToken = (authorizationHeader: string | null): string | null => {
  if (!authorizationHeader) {
    return null;
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secret) as { userId: string };
    return decoded.userId;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
};
