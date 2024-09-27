function SliderNextArrow(props){
    const { className , onClick } = props;
   return(
     <div className={className} onClick={onClick}>
        <svg width="56" height="57" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 19.25L57 38.5L38 57.75" stroke="white" stroke-width="2"/>
            <path d="M19 19.25L38 38.5L19 57.75" stroke="white" stroke-width="2"/>
        </svg>
      </div>    
   )
}
export default SliderNextArrow ;