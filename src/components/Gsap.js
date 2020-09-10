import React, { useRef, useEffect } from 'react';
import './gsap.css';
import { TweenMax, Back, Power3, Power1, TimelineMax } from 'gsap';

const Gsap = () => {
    let f = useRef(null);
    let c = useRef(null);
    let g = useRef(null);
    let t = useRef(null);
    let h = useRef(null);
    let u = useRef(null);
    let v = useRef(null);
    let w = useRef(null);
    let x = useRef(null);
    let d = useRef(null);
    let k = useRef(null);
    let l = useRef(null);
    let m = useRef(null);
    let n = useRef(null);
    let e = useRef(null);
    let b = useRef(null);
    let p = useRef(null);
    let q = useRef(null);
    let y = useRef(null);
    let r = useRef(null);
    let z = useRef(null);
    let A = useRef(null);
    let s = useRef(null);
	useEffect(() => {
        TweenMax.set(c, { transformOrigin: '50% 100%' });
        TweenMax.set([ h, n, y ], { transformOrigin: '50% 0%' });
        TweenMax.set([ g, f, d, m, b, x, p, q, e, z, A, s, w, r ], { transformOrigin: '50% 50%' });
        TweenMax.set([ k, l ], { transformOrigin: '0% 100%' });
        TweenMax.set(b, { rotation: -90 });
        var B = new TimelineMax({ repeat: -1, delay: 1, yoyo: !1, paused: !1 });
        B.timeScale(3);
        B.from(c, 1, { scaleY: 0, ease: Power1.easeOut })
            .from(h, 1, { y: -70, ease: Power1.easeOut }, '-=1')
            .from(u, 0.5, { alpha: 0, ease: Power1.easeIn }, '-=0.5')
            .from(v, 1, { y: 330 }, '-=0.25')
            .from(f, 2, { y: 330, ease: Power1.easeOut }, '-=1')
            .staggerFrom(t, 1, { scaleX: 0 }, 0.1, '-=0.51')
            .from(g, 1, { scale: 0, ease: Back.easeOut.config(2) })
            .staggerTo(t, 1, { alpha: 0, delay: 2 }, 0.1)
            .to(f, 1, { y: 330, ease: Power1.easeIn }, '-=1')
            .to(v, 1, { y: 330, ease: Power1.easeIn }, '-=0.75')
            .to(c, 1, { scaleX: 0.69, y: -23 })
            .to(c, 1, { scaleY: 0.45, alpha: 1 }, '-=1')
            .set(c, { alpha: 0 })
            .to(g, 0.5, { scale: 0, ease: Back.easeIn }, '-=1')
            .to(h, 1, { y: -120 }, '-=1.5')
            .to(u, 0.5, { alpha: 0 }, '-=1.5')
            .from(n, 1, { alpha: 0 }, '-=1')
            .from(m, 1, { scaleX: 0 }, '-=1')
            .from(d, 1, { scale: 0, ease: Back.easeOut.config(0.5) })
            .from(k, 2, { skewX: -40, scaleY: 0, ease: Power3.easeOut }, '-=2')
            .from(l, 2, { skewX: 40, scaleY: 0, ease: Power3.easeOut }, '-=2')
            .staggerFrom(w, 1, { scaleX: 0 }, 0.1)
            .to(m, 0.3, { alpha: 0, delay: 2 })
            .to(d, 1, { scaleX: 0.67 })
            .to(d, 1, { scaleY: 0.8 }, '-=1')
            .to(w, 1, { alpha: 0, scale: 0.5 }, '-=1')
            .to(n, 1, { y: -20, scaleX: 0 }, '-=1')
            .to(
                k,
                1,
                {
                    x: 40,
                    transformOrigin: '50% 50%',
                    scaleY: 0.85
                },
                '-=1'
            )
            .to(l, 1, { x: -40, transformOrigin: '50% 50%', scaleY: 0.85 }, '-=1')
            .set(x, { alpha: 0 })
            .from(b, 1, { scale: 1.1, alpha: 0 }, '-=1')
            .to(b,2,{rotation:0,delay:2,ease:Back.easeOut})
            .staggerFrom([ p, q ], 0.5, { scale: 0, ease: Back.easeOut }, 0.1, '-=1')
            .from(e, 2, { rotation: 90, scaleX: 1.33, scaleY: 0.8, ease: Power3.easeInOut }, '-=0')
            .to([ p, q ], 0.5, { scale: 0, delay: 2 })
            .to(b, 1, { scaleX: 0.45 })
            .to(b, 1, { scaleY: 0.7 }, '-=1')
            .to(e, 1, { y: -5 }, '-=1')
            .to(y, 0.5, { scaleY: 0.92, y: 4 }, '-=0.5')
            .set(r, { alpha: 1 })
            .set([ b, e ], { alpha: 0 })
            .staggerFrom([ z, A, s ], 1, { scale: 0, ease: Back.easeOut }, 0.1)
            .to(r, 2, { y: 80, delay: 2, ease: Back.easeIn.config(2) });
        TweenMax.set('svg', { visibility: 'visible' });
	},[])
	return (
		<div className="gsap" id="test">
			
			<svg
                className="animSvg"
				xmlns="http://www.w3.org/2000/svg"
				width="600"
				height="600"
				viewBox="0 0 600 600"
			>
				<defs>
					<clipPath id="monitorEdgeMask">
						<path
							class="monitorEdgeMask"
							fill="#494D5D"
							d="M559.7 79h-520C32.5 79 27 84.6 27 91.8V403h546V91.8c0-7.2-6.1-12.8-13.3-12.8z"
						/>
					</clipPath>
					<clipPath id="laptopBaseMask">
						<path
							class="laptopBaseMask"
							fill="#FFFAEB"
							d="M487 409v15.5c0 3.8-3.2 7.5-7 7.5H120c-3.8 0-7-3.7-7-7.5V409h374z"
						/>
					</clipPath>
					<clipPath id="monitorStandMask">
						<path class="monitorStandMask" fill="#EA2877" d="M23 455h550v102H23z" />
					</clipPath>
					<clipPath id="tabletContentGroupMask">
						<path
							class="tabletContentGroupMask"
							fill="#BDCCD4"
							d="M218.5 386.5v-203c0-2.8 2.3-5 5-5h153c2.8 0 5 2.3 5 5v203c0 2.8-2.3 5-5 5h-153c-2.7 0-5-2.2-5-5z"
						/>
					</clipPath>
				</defs>
				<g class="monitorGroup">
					<g class="monitorStandGroup" clip-path="url(#monitorStandMask)">
						<path
                            ref={(el) => {h = el}}
							class="monitorStand"
							fill="#FFFAEB"
							d="M386.3 512H374l-20.7-57h-106L226 512h-12.3c-2.6 0-4.7 1.9-4.7 4.5s2.1 4.5 4.7 4.5h172.7c2.6 0 4.7-1.9 4.7-4.5s-2.2-4.5-4.8-4.5z"
						/>
					</g>
					<path ref={(el) => {u = el}} class="monitorStandShadow" fill="#D9D7D3" d="M357.4 467H242.6l4.5-12h106" />
					<g class="monitorEdgeGroup" clip-path="url(#monitorEdgeMask)">
						<path
                            ref={(el) => {v = el}}
							class="monitorEdge"
							fill="#494D5D"
							d="M559.7 79h-520C32.5 79 27 84.6 27 91.8V403h546V91.8c0-7.2-6.1-12.8-13.3-12.8z"
						/>
						<path
                            ref={(el) => {f = el}}
							class="monitorScreen"
							fill="#BDCCD4"
							d="M544.5 383.3h-489c-3.8 0-7-3.1-7-7v-271c0-3.8 3.2-7 7-7h489c3.8 0 7 3.2 7 7v271c0 3.8-3.2 7-7 7z"
						/>
						<g ref={(el) => {t = el}} class="monitorContentGroup" opacity=".6">
							<path
								fill="#E5EBEE"
								d="M526.8 145H73.2c-3.2 0-5.7-2.6-5.7-5.7v-15.5c0-3.2 2.6-5.7 5.7-5.7h453.5c3.2 0 5.7 2.6 5.7 5.7v15.5c.1 3.1-2.5 5.7-5.6 5.7z"
							/>
							<path
								fill="#8CA5B2"
								d="M157.9 364.5H73.1c-3.1 0-5.6-2.5-5.6-5.6v-58.7c0-3.1 2.5-5.6 5.6-5.6h84.7c3.1 0 5.6 2.5 5.6 5.6v58.7c.1 3.1-2.4 5.6-5.5 5.6z"
							/>
							<path
								fill="#8CA5B2"
								d="M526.9 272.5H73.1c-3.1 0-5.6-2.5-5.6-5.6v-93.7c0-3.1 2.5-5.6 5.6-5.6h453.7c3.1 0 5.6 2.5 5.6 5.6v93.7c.1 3.1-2.4 5.6-5.5 5.6z"
							/>
							<path
								fill="#E5EBEE"
								d="M530.5 306H190.2c-1.1 0-2-.9-2-2v-7.5c0-1.1.9-2 2-2h340.3c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2z"
							/>
							<path
								fill="#E5EBEE"
								d="M530.5 334.3H190.2c-1.1 0-2-.9-2-2v-7.5c0-1.1.9-2 2-2h340.3c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2z"
							/>
							<path
								fill="#E5EBEE"
								d="M530.5 364.5H190.2c-1.1 0-2-.9-2-2V355c0-1.1.9-2 2-2h340.3c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2z"
							/>
						</g>
					</g>
					<path
                        ref={(el) => {c = el}}
						class="monitorBottom"
						fill="#FFFAEB"
						d="M573 403v39c0 7.1-6.1 13-13.3 13h-520c-7.2 0-12.7-5.9-12.7-13v-39h546z"
					/>
					<circle ref={(el) => {g = el}} class="monitorLogo" fill="#A4ACBB" cx="300" cy="426" r="10" />
				</g>
				<g ref={(el) => {x = el}} class="laptopGroup">
					<path ref={(el) => {k = el}} class="laptopEdgeLeft" fill="#FFFAEB" d="M310 401.5H131.5v-226c0-3.9 3.2-7 7-7H310" />
					<path ref={(el) => {l = el}} class="laptopEdgeRight" fill="#FFFAEB" d="M290 168.5h171.5c3.8 0 7 3.1 7 7v226H290" />
					<g class="laptopBaseGroup" clip-path="url(#laptopBaseMask)">
						<path
                            ref={(el) => {n = el}}
							class="laptopBase"
							fill="#FFFAEB"
							d="M487 409v15.5c0 3.8-3.2 7.5-7 7.5H120c-3.8 0-7-3.7-7-7.5V409h374z"
						/>
					</g>
					<path ref={(el) => {m = el}} class="laptopTrackpad" fill="#A4ACBB" d="M326.7 421.8h-53.4l-5-7.6h63.4" />
					<path
                        ref={(el) => {d = el}}
						class="laptopScreen"
						fill="#BDCCD4"
						d="M452.7 391.9H147.3c-3.8 0-7-3.1-7-7V185.6c0-3.8 3.2-7 7-7h305.3c3.9 0 7 3.2 7 7v199.3c.1 3.9-3.1 7-6.9 7z"
					/>
					<g ref={(el) => {w = el}} class="laptopContentGroup" opacity=".6">
						<path
							fill="#E5EBEE"
							d="M437.8 212.3H164.1c-1.9 0-3.5-1.6-3.5-3.5v-9.4c0-1.9 1.6-3.5 3.5-3.5h273.7c1.9 0 3.5 1.6 3.5 3.5v9.4c-.1 1.9-1.6 3.5-3.5 3.5z"
						/>
						<path
							fill="#8CA5B2"
							d="M215.1 363.8H164c-1.9 0-3.4-1.5-3.4-3.4V325c0-1.9 1.5-3.4 3.4-3.4h51.1c1.9 0 3.4 1.5 3.4 3.4v35.4c0 1.9-1.5 3.4-3.4 3.4z"
						/>
						<path
							fill="#8CA5B2"
							d="M437.8 307.3H164c-1.9 0-3.4-1.5-3.4-3.4v-74.6c0-1.9 1.5-3.4 3.4-3.4h273.8c1.9 0 3.4 1.5 3.4 3.4v74.6c0 1.9-1.5 3.4-3.4 3.4z"
						/>
						<path
							fill="#E5EBEE"
							d="M440 328.5H234.6c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2H440c.7 0 1.2.5 1.2 1.2v4.5c0 .6-.5 1.2-1.2 1.2z"
						/>
						<path
							fill="#E5EBEE"
							d="M440 345.5H234.6c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2H440c.7 0 1.2.5 1.2 1.2v4.5c0 .7-.5 1.2-1.2 1.2z"
						/>
						<path
							fill="#E5EBEE"
							d="M440 363.8H234.6c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2H440c.7 0 1.2.5 1.2 1.2v4.5c0 .7-.5 1.2-1.2 1.2z"
						/>
					</g>
				</g>
				<g ref={(el) => {r = el}} class="phoneGroup" opacity="0">
					<path
						class="phoneEdge"
						fill="#FFFAEB"
						d="M255.2 371.4V198.6c0-3.2 2.7-5.9 5.9-5.9H339c3.2 0 5.9 2.7 5.9 5.9v172.9c0 3.2-2.7 5.9-5.9 5.9h-77.9c-3.3-.1-5.9-2.7-5.9-6z"
					/>
					<circle ref={(el) => {z = el}} class="phoneButton" fill="#9AA3B2" cx="300" cy="363.1" r="6" />
					<circle ref={(el) => {A = el}} class="phoneCamera" fill="#A4ACBB" cx="284.3" cy="203.6" r="1.5" />
					<path class="phoneScreen" fill="#BDCCD4" d="M262.1 214.3h75.7v135.3h-75.7z" />
					<path
                        ref={(el) => {s = el}}
						class="phoneSpeaker"
						fill="none"
						stroke="#9AA3B2"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-miterlimit="10"
						d="M292.5 203h15"
					/>
					<g class="phoneContentGroup" opacity=".6">
						<path
							fill="#E5EBEE"
							d="M327.8 235.6h-55.3c-1 0-1.9-.9-1.9-1.9v-7.3c0-1 .9-1.9 1.9-1.9h55.3c1 0 1.9.9 1.9 1.9v7.3c0 1.1-.9 1.9-1.9 1.9z"
						/>
						<path
							fill="#8CA5B2"
							d="M294.3 338.7h-21.9c-1 0-1.9-.8-1.9-1.9v-25c0-1 .8-1.9 1.9-1.9h21.9c1 0 1.9.8 1.9 1.9v25c0 1-.9 1.9-1.9 1.9z"
						/>
						<path
							fill="#8CA5B2"
							d="M327.8 300.3h-55.4c-1 0-1.9-.8-1.9-1.9v-51.7c0-1 .8-1.9 1.9-1.9h55.4c1 0 1.9.8 1.9 1.9v51.7c0 1-.9 1.9-1.9 1.9z"
						/>
						<path
							fill="#E5EBEE"
							d="M329 314.7h-25.6c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7H329c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7z"
						/>
						<path
							fill="#E5EBEE"
							d="M329 338.7h-25.6c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7H329c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7z"
						/>
						<path
							fill="#E5EBEE"
							d="M329 326.3h-25.6c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7H329c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7z"
						/>
					</g>
				</g>
				<g ref={(el) => {b = el}} class="tabletGroup">
					<path
						class="tabletEdge"
						fill="#FFFAEB"
						d="M198.5 404.5v-239c0-7.7 6.3-14 14-14h175c7.7 0 14 6.3 14 14v239c0 7.7-6.3 14-14 14h-175c-7.7 0-14-6.3-14-14z"
					/>
					<path
                        ref={(el) => {y = el}}
						class="tabletScreen"
						fill="#BDCCD4"
						d="M218.5 386.5v-203c0-2.8 2.3-5 5-5h153c2.8 0 5 2.3 5 5v203c0 2.8-2.3 5-5 5h-153c-2.7 0-5-2.2-5-5z"
					/>
					<circle ref={(el) => {p = el}} class="tabletButton" fill="#A4ACBB" cx="300" cy="406" r="6" />
					<circle ref={(el) => {q = el}} class="tabletCamera" fill="#A4ACBB" cx="300" cy="168" r="2" />
					<g class="maskedTabletContentGroup" clip-path="url(#tabletContentGroupMask)">
						<g ref={(el) => {e = el}} class="tabletContentGroup" opacity=".6">
							<path
								fill="#E5EBEE"
								d="M363.6 217.4H236.9c-1.9 0-3.5-1.6-3.5-3.5v-9.4c0-1.9 1.6-3.5 3.5-3.5h126.7c1.9 0 3.5 1.6 3.5 3.5v9.4c-.1 1.9-1.6 3.5-3.5 3.5z"
							/>
							<path
								fill="#8CA5B2"
								d="M288 368.9h-51.1c-1.9 0-3.4-1.5-3.4-3.4v-35.4c0-1.9 1.5-3.4 3.4-3.4H288c1.9 0 3.4 1.5 3.4 3.4v35.4c0 1.9-1.6 3.4-3.4 3.4z"
							/>
							<path
								fill="#8CA5B2"
								d="M363.6 312.4H236.8c-1.9 0-3.4-1.5-3.4-3.4v-74.6c0-1.9 1.5-3.4 3.4-3.4h126.8c1.9 0 3.4 1.5 3.4 3.4V309c0 1.9-1.5 3.4-3.4 3.4z"
							/>
							<path
								fill="#E5EBEE"
								d="M365.8 333.6h-58.4c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2h58.4c.7 0 1.2.5 1.2 1.2v4.5c0 .7-.5 1.2-1.2 1.2z"
							/>
							<path
								fill="#E5EBEE"
								d="M365.8 368.9h-58.4c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2h58.4c.7 0 1.2.5 1.2 1.2v4.5c0 .7-.5 1.2-1.2 1.2z"
							/>
							<path
								fill="#E5EBEE"
								d="M365.8 350.6h-58.4c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.2 1.2-1.2h58.4c.7 0 1.2.5 1.2 1.2v4.5c0 .7-.5 1.2-1.2 1.2z"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default Gsap;
