import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

// Partner interface
interface Partner {
  id?: string;
  name: string;
  serviceArea: string;
  // 기타 필요한 필드들...
}

// Firestore collection references
const partnersCollectionRef = collection(db, 'Partners');

// Partners 모듈
const fbPartners = {
  // 모든 파트너 조회
  getAllPartners: async (): Promise<Partner[]> => {
    const snapshot = await getDocs(partnersCollectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Partner));
  },

  // 파트너 추가
  addPartner: async (partner: Partner): Promise<void> => {
    await addDoc(partnersCollectionRef, partner);
  },

  // 파트너 상세 조회
  getPartnerById: async (id: string): Promise<Partner | undefined> => {
    const docRef = doc(partnersCollectionRef, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as Partner) : undefined;
  },

  // 파트너 수정
  updatePartner: async (id: string, updatedFields: Partial<Partner>): Promise<void> => {
    const docRef = doc(partnersCollectionRef, id);
    await updateDoc(docRef, updatedFields);
  },

  // 파트너 삭제
  deletePartner: async (id: string): Promise<void> => {
    const docRef = doc(partnersCollectionRef, id);
    await deleteDoc(docRef);
  }
};

export default fbPartners;
