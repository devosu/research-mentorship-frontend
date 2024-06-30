// @app/admin/page.tsx
//
// 'research.osu.dev' admin page definition.

"use client";
// NextJS essential imports.
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";
import DefaultApplicationCard from "@src/components/DefaultApplicationCard";
import { db } from "@src/lib/firebaseInit";

export default function Admin() {
  const [data, setData] = useState<MenteeData[]>([]);

  const getData = useCallback(async () => {
    console.log("running");
    const ref = collection(db, "applications");
    const q = query(ref, where("type", "in", ["mentee", "mentor"]));
    const querySnapshot = await getDocs(q);
    const dataHolder: MenteeData[] = [];
    for (const doc of querySnapshot.docs) {
      const data: MenteeData = {
        id: doc.id,
        name: doc.data().name,
        type: doc.data().type,
        year: doc.data().year,
        major: doc.data().major,
        desiredResearchField: doc.data().desiredResearchField,
        currentResearchField: doc.data().currentResearchField,
        currentResearchFieldDescription:
          doc.data().currentResearchFieldDescription,
      };
      dataHolder.push(data);
      console.log(doc.data().firstName);
    }
    setData(dataHolder);
    console.log("set data");
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <main>
      <DefaultHeader />
      {data.map((item, i) => (
        <DefaultApplicationCard
          key={item.name}
          id={`${i}`}
          name={item.name}
          major={item.major}
          currentResearchField={item.currentResearchField}
          currentResearchFieldDescription={item.currentResearchFieldDescription}
        />
      ))}
      <DefaultFooter />
    </main>
  );
}
