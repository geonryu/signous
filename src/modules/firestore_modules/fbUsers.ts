// import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { validateEmail, validatePassword, validatePasswordConfirmation, formatPhoneNumber } from './formHandler';
// import { db } from '../../firebase';

// // User interface
// interface User {
//     id?: string;
//     email: string;
//     password: string;
//     name: string;
//     phone: string;
//   // 기타 필요한 필드들...
// }


// // Firestore collection references
// const usersCollectionRef = collection(db, 'users');

// // Users 모듈
// const fbUsers = {
//     // 회원가입
//     signUp: async (userData: User): Promise<void> => {
//         if (!validateEmail(userData.email) || !validatePassword(userData.password).every(v => v)) {
//             throw new Error('Invalid email or password');
//         }

//         if (!validateEmail(userData.email)) {
//             throw new Error('Invalid email format');
//         }

//         // 비밀번호 유효성 검사
//         const passwordValidation = validatePassword(userData.password);
//         if (passwordValidation.includes(false)) {
//             throw new Error('Password does not meet criteria');
//         }

//         // 비밀번호 재입력 검사
//         if (!validatePasswordConfirmation(userData.password, userData.confirmPassword)) {
//             throw new Error('Password confirmation does not match');
//         }

//         // 필수 이용약관 동의 검사 (첫 번째와 두 번째 항목이 필수)
//         const termsValidation = handleTermsAgreement(userData.termsAgreement);
//         if (!termsValidation[1] || !termsValidation[2]) {
//         throw new Error('Agreement to all required terms is necessary');
//         }

//         // 비밀번호 암호화 로직 구현 필요
//         // 휴대폰 번호 형식 변환
//         const formattedPhone = formatPhoneNumber(userData.phone);

//         // Firestore에 사용자 데이터 추가
//         await addDoc(usersCollectionRef, {...userData, phone: formattedPhone});

//     },

//     signIn: async (email: string, password: string): Promise<User | undefined> => {

//     },

//     getUserById: async (id: string): Promise<User | undefined> => {
//         const docRef = doc(usersCollectionRef, id);
//         const docSnap = await getDoc(docRef);
//         return docSnap.exists() ? (docSnap.data() as User) : undefined;
//     },

//     // 사용자 정보 수정
//     updateUser: async (id: string, updatedFields: Partial<User>): Promise<void> => {
//         const docRef = doc(usersCollectionRef, id);
//         await updateDoc(docRef, updatedFields);
//     },

//     // 회원 탈퇴
//     deleteUser: async (id: string): Promise<void> => {
//         const docRef = doc(usersCollectionRef, id);
//         await deleteDoc(docRef);
//     }
// };

// export default fbUsers;
