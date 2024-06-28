// @app/admin/page.tsx
//
// 'research.osu.dev' admin page definition.

"use client";
// NextJS essential imports.
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";
import DefaultApplicationCard from "@src/components/DefaultApplicationCard";
import { db } from "@src/lib/firebaseInit";

export default function Admin() {
  const [data, setData] = useState<any[]>([]);

  async function getData() {
    console.log("running");
    const ref = collection(db, "applications");
    const q = query(ref, where("type", "in", ["mentee", "mentor"]));
    const querySnapshot = await getDocs(q);
    var dataHolder: any[] = [];
    querySnapshot.forEach((doc: any) => {
      var data = {
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
    });
    setData(dataHolder);
    console.log("set data");
  }

  useEffect(() => {
    getData();
    console.log(data);
    console.log("done");
  }, []);

  return (
    <main>
      <DefaultHeader />
      {data.map((item, i) => (
        <DefaultApplicationCard
          id={`${i}`}
          name={item.name}
          major={item.major}
          currentResearchField={item.researchField}
          currentResearchFieldDescription={item.researchDesc}
        />
      ))}
      <DefaultFooter />
    </main>
  );
}
