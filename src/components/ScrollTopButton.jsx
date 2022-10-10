import React, { useState } from 'react'

function ScrollTopButton() {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="scroll-top" onClick={scrollToTop} >
      <i className="fa fa-angle-up" aria-hidden="true"></i>
    </button>
  )
}

export default ScrollTopButton