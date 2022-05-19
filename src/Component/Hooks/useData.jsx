import React, { useEffect, useState } from 'react'

const useData = () => {
    const [userData, setUserData]= useState([]);
    useEffect(() => {
      const url = `https://enigmatic-sea-26280.herokuapp.com/tasks`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          setUserData(data)
        });
    }, [userData]);
    return [userData, setUserData];
}

export default useData;