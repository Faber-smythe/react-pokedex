import React from 'react';

export default function TypeFilter(props) {
  const { type, toggleType, currentFilters} = props;
  let active_toggle = '';
  if(currentFilters && currentFilters.length && currentFilters.includes(type.fr_label)){
    active_toggle = 'active';
  }
  if(currentFilters && currentFilters.length && !currentFilters.includes(type.fr_label)){
    active_toggle = 'inactive';
  }
  return (
    <div>
      <img className={active_toggle} src={type.src} onClick={e=>{toggleType(type.fr_label)}}/>
    </div>
  );
}
