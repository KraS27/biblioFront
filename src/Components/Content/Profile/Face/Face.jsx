import React from 'react';
import style from './Face.module.css';

const Face = (props) => {
    return (
        <div className={style.faceWrapper}>
            <div >
                <img className={style.avatarImage}
                     src={'https://upload.wikimedia.org/wikipedia/uk/archive/d/de/20200531200933%21Berserk_guts.jpg'}
                     alt={'Guts'}/>
            </div>
            <div>
                <h2>About Me</h2>
                <p className={style.description}>
                    Guts, renowned as the "Black Swordsman", is a former mercenary and branded wanderer who travels the world in a constant internal struggle between pursuing his own ends and upholding his attachments to those dear to him.

                    At one time driven solely by his will to survive, Guts finds purpose in life upon joining the Band of the Falcon, greatly helping in the faction's storied successes during the Hundred-Year War as captain of the band's raiders. He eventually becomes dissatisfied with clinging to Griffith's dream and departs from the band in pursuit of his own.
                </p>
            </div>
        </div>
    );
};

export default Face;