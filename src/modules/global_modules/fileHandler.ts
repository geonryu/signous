import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

// 비밀번호 유효성 검사 함수
export const validatePassword = (password: string): boolean[] => {
  const lengthValid = password.length >= 8 && password.length <= 16;
  const hasLetters = /[A-Za-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

  return [lengthValid, hasLetters, hasNumbers, hasSpecialChars];
};

// 비밀번호 재입력 검사 함수
export const validatePasswordConfirmation = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

// 이용약관 동의 처리 함수
export const handleTermsAgreement = (terms: boolean[]): boolean[] => {
  const allAgreed = terms.every(term => term);
  const allTerms = [allAgreed, ...terms];

  return allTerms;
};

// 휴대폰 번호 형식 자동 추가 함수
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};

// Firestore에 데이터 저장 함수 (addDoc 사용)
export const saveToFirestore = async (collectionName: string, data: any) => {
  const collectionRef = collection(db, collectionName);
  await addDoc(collectionRef, data);
};
