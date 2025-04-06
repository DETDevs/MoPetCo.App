export const saveScrollPosition = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    sessionStorage.setItem("lastScrollPosition", scrollPosition.toString());
  };
  
  export const shouldScrollToTop = (): boolean => {
    const scrollPosition = Number(sessionStorage.getItem("lastScrollPosition")) || 0;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
  
    // Consideramos "hasta abajo" si está al 90% del scroll total o más
    return scrollPosition >= documentHeight * 0.50;
  };
  