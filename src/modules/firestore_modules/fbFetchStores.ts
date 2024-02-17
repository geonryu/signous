import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const fetchData = async (add1: any) => {
  // "address1"이 "서울"이고, "address2"가 "중구"인 문서만 필터링합니다.
  const q = query(
    collection(db, "stores"),
    where("address1", "==", add1),
    // where("address2", "==", "중구"),
    // orderBy("type") // "type" 필드에 따라 정렬합니다.
  );
  
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  // "type"이 "partner"인 문서를 우선적으로 배열의 앞쪽으로 정렬합니다.
  // const sortedData = data.sort((a, b) => {
  //   if (a.type === "partner" && b.type !== "partner") {
  //     return -1; // "a"를 "b"보다 앞에 위치시킵니다.
  //   } else if (a.type !== "partner" && b.type === "partner") {
  //     return 1; // "b"를 "a"보다 앞에 위치시킵니다.
  //   }
  //   return 0; // "type"이 동일하면 순서를 변경하지 않습니다.
  // });

  return data;
};
