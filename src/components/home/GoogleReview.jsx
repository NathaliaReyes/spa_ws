import * as React from 'react';
import GoogleRev from '../../assets/home/google_rev.png';

export default function GoogleReview() {
    return (
        <a href="https://www.google.com/maps/place/Harmony+Wellness+%26+Spa/@27.9221696,-82.3186383,17z/data=!4m18!1m9!3m8!1s0x88c2cf99ae4ad72f:0x9ed1156e1275216d!2sHarmony+Wellness+%26+Spa!8m2!3d27.9221649!4d-82.3160634!9m1!1b1!16s%2Fg%2F11y7cflphv!3m7!1s0x88c2cf99ae4ad72f:0x9ed1156e1275216d!8m2!3d27.9221649!4d-82.3160634!9m1!1b1!16s%2Fg%2F11y7cflphv?entry=ttu" target="_blank" rel="noopener noreferrer">
            <img
                src={GoogleRev}
                alt="Google Review Harmony Wellness & Spa"
                className='lg:h-64 lg:w-64 md:h-48 md:w-48 h-32 w-32 hover:shadow-lg rounded-full'
            />
        </a>
    );
}
