import { collection, addDoc } from 'firebase/firestore';
import { MemberCompany } from '../types'; // 정의된 회원사 타입을 import
import { db } from '../firebase';

const memberCompaniesCollectionRef = collection(db, 'memberCompanies');

export const createMemberCompany = async (memberCompanyData: MemberCompany) => {
  try {
    const docRef = await addDoc(memberCompaniesCollectionRef, memberCompanyData);
    // console.log('Member company created with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    // console.error('Error creating member company:', error);
  }
};

