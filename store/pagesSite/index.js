export const state = ()=>{
  return {
    pagesSite: [
      {
        id: 1,
        dateChange: '11-09-2021',
        name: 'home',
        title: 'Home',
      },
      {
        id: 2,
        dateChange: '11-09-2021',
        name: 'aboutUs',
        title: 'About Us',
      },
      {
        id: 3,
        dateChange: '11-09-2021',
        name: 'projects',
        title: 'Projects',
      },
      {
        id: 4,
        dateChange: '11-09-2021',
        name: 'product',
        title: 'Products',
      },
      {
        id: 5,
        dateChange: '11-09-2021',
        name: 'articles',
        title: 'Articles',
      },
      {
        id: 6,
        dateChange: '11-09-2021',
        name: 'contacts',
        title: 'Contacts',
      }
    ]
  }
};
export  const mutation = {

};
export  const action = {

};
export  const getters = {
  pagesSite: state => state.pagesSite,
};
