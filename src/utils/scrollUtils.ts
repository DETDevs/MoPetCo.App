export const saveScrollPosition = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    sessionStorage.setItem("lastScrollPosition", scrollPosition.toString());
  };
  
  export const shouldScrollToTop = (): boolean => {
    const scrollPosition = Number(sessionStorage.getItem("lastScrollPosition")) || 0;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
  
    return scrollPosition >= documentHeight * 0.50;
  };
  