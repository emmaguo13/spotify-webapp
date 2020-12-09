import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import '../css/Results.css';
import Loading from "./Loading";
import IBMWatson from "../images/ibmwatson.png";
import SpotifyLogo from "../images/spotify_black_clean.png";
import MusicHead from "../images/musicbrain.png";
import Pisces from "../images/pisces.jpg";

const Results = () => {
    $(document).ready(function () {
        /* Check the location of each desired element */
        $('.fade-in').each(async function (i) {
            const top_of_object = $(this).offset().top;
            const bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {
                $(this).animate({ opacity: '1' }, 550);
            }
        });
        /* Every time the window is scrolled */
        $(window).scroll(async function () {
            /* Check the location of each desired element */
            $('.fade-in').each(function (i) {
                const top_of_object = $(this).offset().top;
                const bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > top_of_object) {
                    $(this).animate({ opacity: '1' }, 350);
                }
            });
        });
    });
    return (
        <div className="Results">
            <SiteNavbar sticky="true" bg="transparent" />
            <div className="header">
                <br/>
                <br/>
                <br/>
                <br/>
                <h12> Results </h12>
                <br/>
                <h22>Your sign is Pisces</h22>

                <section>
                    <table>
                        <tr>
                            <td>
                                <img src={Pisces} className="pisces" alt="Image N/A"/>
                            </td>
                            <td>
                                <div className="v2"/>
                            </td>
                            <td>
                                <h3>Personality Traits
                                    Pisces is a water sign, they are known for generally being more laid back and agreeable than their other water sign counterparts</h3>
                                <br/>
                                <h3>
                                    They are empathetic and generous, they'll do whatever they can to make sure the people around them are happy. Always looking for the best in others, they are also quite impressionable.
                                    They are also incredibly creative and artistic!
                                </h3>

                            </td>
                        </tr>
                    </table>
                </section>

            </div>
        </div>
    );
};
export default Results;