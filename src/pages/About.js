import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function About() {
  return (
    <div>
       
        <Nav/>
        <div className="about-container">
        <h1>About</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde ullam reiciendis corrupti aspernatur, labore exercitationem doloremque aliquid hic minus consectetur expedita quae? Dolor nisi est repellat quisquam. Adipisci fugiat autem pariatur. Placeat ea autem aliquam dolorem numquam cupiditate ipsa laboriosam at dicta repellendus eius, animi tenetur temporibus saepe dolorum repellat error vero beatae! Nam, laudantium alias doloremque mollitia magni sapiente corrupti dolorem perferendis, neque voluptate incidunt accusantium expedita vel tempore dolor quam illum labore nihil tempora obcaecati libero aliquid repudiandae impedit. Possimus fugiat incidunt natus perspiciatis facere magni maiores vero nobis temporibus, consequatur repellendus magnam labore esse autem reiciendis ratione laudantium nesciunt accusamus aliquam quasi eos voluptas? Iusto porro unde nesciunt aliquid adipisci a temporibus, officia atque doloremque ut ullam et? Sed, at velit? Consequatur deserunt non ullam, fugiat rem eveniet mollitia est, repellendus cupiditate numquam consequuntur, illum velit earum vero modi illo sapiente tenetur quas harum nobis sequi culpa aliquid. Nisi accusantium magnam dolorum blanditiis dolores ab distinctio facere, possimus architecto animi similique natus iusto! Labore molestiae eum minima, consequatur repudiandae ipsa porro. Illum, aliquid. Esse, cumque aperiam! Amet eum quas similique nobis vero natus saepe voluptatibus, ut ipsam corporis ab beatae delectus minima illum assumenda facilis culpa.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde ullam reiciendis corrupti aspernatur, labore exercitationem doloremque aliquid hic minus consectetur expedita quae? Dolor nisi est repellat quisquam. Adipisci fugiat autem pariatur. Placeat ea autem aliquam dolorem numquam cupiditate ipsa laboriosam at dicta repellendus eius, animi tenetur temporibus saepe dolorum repellat error vero beatae! Nam, laudantium alias doloremque mollitia magni sapiente corrupti dolorem perferendis, neque voluptate incidunt accusantium expedita vel tempore dolor quam illum labore nihil tempora obcaecati libero aliquid repudiandae impedit. Possimus fugiat incidunt natus perspiciatis facere magni maiores vero nobis temporibus, consequatur repellendus magnam labore esse autem reiciendis ratione laudantium nesciunt accusamus aliquam quasi eos voluptas? Iusto porro unde nesciunt aliquid adipisci a temporibus, officia atque doloremque ut ullam et? Sed, at velit? Consequatur deserunt non ullam, fugiat rem eveniet mollitia est, repellendus cupiditate numquam consequuntur, illum velit earum vero modi illo sapiente tenetur quas harum nobis sequi culpa aliquid. Nisi accusantium magnam dolorum blanditiis dolores ab distinctio facere, possimus architecto animi similique natus iusto! Labore molestiae eum minima, consequatur repudiandae ipsa porro. Illum, aliquid. Esse, cumque aperiam! Amet eum quas similique nobis vero natus saepe voluptatibus, ut ipsam corporis ab beatae delectus minima illum assumenda facilis culpa.
        </p>
        <div className='Agree'>
            <input type="checkbox"></input>
            <p>“By checking this box, you are agreeing to our terms of service.”</p>
        </div>
        <button type="button" class="btn btn btn-lg btn-block w-50  text-white-50 Navstyle"><Link to="*">Submit</Link></button>
        </div>
    </div>
  )
}
