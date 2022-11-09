import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    document.title=`${title}-HomemadeCrunch`
   },[title])
};

export default useTitle;

