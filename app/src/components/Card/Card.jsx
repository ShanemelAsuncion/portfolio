import React from 'react'
import './Card.scss'
import Tag from '../Tag/Tag';

function Card({proj, ind}) {
  console.log(proj, ind)
  const tags = proj.tags;
  const desc= proj.description.toUpperCase();
  return (
    <div className='card'>
      <div className='card__ind'>
        <p>&lt;00{proj.id}&gt;</p>
      </div>
      <div className='card__desc'>
        <h2>{desc}</h2>
      </div>

      <div className='card__contents'>
        <div className='card__tags'>
          {
            tags.map((tag,ind) => (
              <Tag key ={ind} info={tag} />
            ))
          }
        </div>

        <div className='card__button'>
          <button>View Work</button>
        </div>
      </div>
    </div>
  )
}

export default Card