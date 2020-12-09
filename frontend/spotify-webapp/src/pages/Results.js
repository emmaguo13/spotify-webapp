import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';

import '../css/Results.css';
import Loading from "./Loading";

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
        </div>
    );
};
export default Results;