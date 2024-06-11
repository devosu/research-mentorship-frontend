// @app/admin/page.tsx
//
// 'research.osu.dev' admin page definition.

'use client';
// NextJS essential imports.
import { getDocs, where, collection, query } from "firebase/firestore"; 
import { useEffect, useState } from 'react';

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import { db } from '@src/lib/firebaseInit';
import DefaultApplicationCard from "@src/components/DefaultApplicationCard";

export default function Admin () {
  const [data, setData] = useState<any[]>([]);

  async function getData() {
      console.log('running');
      const ref = collection(db, "users");
      const q = query(ref, where('type', 'in', ['mentee', 'mentor']));
      const querySnapshot = await getDocs(q);
      var dataHolder: any[] = [];
      querySnapshot.forEach((doc: any) => {
          var data = {
              name: doc.data().firstName,
              major: doc.data().currentMajor, 
              researchField: doc.data().currentMajor, 
              researchDesc: doc.data().personalBio,
              link: doc.data().calendarSchedulerLink,
          };
          dataHolder.push(data);
          console.log(doc.data().firstName);
      });
      setData(dataHolder);
      console.log('set data');
  }

  useEffect(() => {
      getData();
      console.log(data);
      console.log('done');
}, []);

  return (
    <main>
        <DefaultHeader/>
        {data.map((item) => (
                <DefaultApplicationCard name={item.name} major={item.major} researchField={item.researchField} researchDesc={item.researchDesc} link={item.link} />
            ))}
        <DefaultFooter/>
    </main>
  );
}