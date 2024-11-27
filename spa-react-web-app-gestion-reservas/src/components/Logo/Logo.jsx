import './Logo.css'

function Logo({size, color, href}) {
    function click(href) {
        if(href) console.log(href)
    }
    return (
        <>
            <div className={`pw-logo pw-logo-size-${['xs', 's', 'm', 'l', 'xl'].includes(size) ? size : 'm'}`} onClick={() => {click(href)}}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1920.000000pt" height="1080.000000pt" viewBox="0 0 1920.000000 1080.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                        fill={`var(--pw-color-${['accent', 'black', 'white', 'gray', 'success', 'warning', 'danger'].includes(color) ? color : 'accent'})`} stroke="none">
                            <path d="M561 8726 c-97 -25 -219 -94 -290 -166 -124 -124 -183 -262 -201
                            -468 -7 -79 -10 -892 -8 -2487 l3 -2370 23 -80 c56 -201 169 -345 332 -423
                            116 -55 201 -72 358 -72 96 0 149 5 207 20 228 58 388 221 458 467 l22 78 5
                            1435 5 1435 1164 -1515 c640 -833 1194 -1551 1230 -1594 124 -148 253 -244
                            401 -297 58 -21 83 -23 235 -24 152 0 177 2 237 23 179 62 323 214 384 407 35
                            110 44 238 44 645 l0 345 80 -135 c369 -621 972 -1107 1649 -1330 394 -130
                            674 -164 1286 -158 l280 3 69 115 c239 399 618 1075 747 1331 128 256 256 611
                            358 993 65 242 67 256 42 287 l-19 24 -1039 6 c-939 5 -1046 7 -1118 23 -92
                            20 -222 31 -259 22 -17 -4 -132 -131 -360 -400 -185 -217 -353 -408 -373 -425
                            -60 -50 -94 -61 -181 -61 -81 0 -112 12 -112 43 0 7 47 212 105 455 58 244
                            105 455 105 471 0 36 -14 47 -132 111 -54 28 -98 55 -98 59 0 4 39 25 88 45
                            112 49 132 62 132 87 0 12 -52 232 -115 490 -63 258 -115 481 -115 494 0 32
                            31 45 103 45 70 0 118 -15 158 -48 19 -15 202 -199 407 -409 313 -321 380
                            -385 414 -395 34 -10 57 -9 142 8 95 18 160 19 1176 22 1185 3 1110 -2 1110
                            64 0 88 -179 694 -282 953 -101 256 -321 659 -741 1363 l-181 302 -400 0
                            c-435 0 -559 -7 -768 -46 -603 -110 -1135 -387 -1582 -823 -206 -201 -373
                            -411 -507 -636 l-64 -108 -6 619 c-5 593 -7 622 -27 699 -37 136 -84 219 -176
                            310 -92 92 -166 134 -290 165 -99 25 -290 27 -398 5 -238 -50 -421 -227 -491
                            -472 l-22 -78 -5 -1427 -5 -1427 -1190 1546 c-1219 1584 -1307 1693 -1436
                            1777 -31 21 -90 49 -130 63 -66 23 -92 27 -229 29 -107 3 -172 -1 -209 -10z"/>
                            <path d="M9808 8541 l-827 -6 271 -312 270 -313 252 0 c251 0 253 0 274 -23
                            19 -20 22 -35 22 -101 0 -68 -3 -80 -25 -101 -22 -23 -31 -25 -127 -25 -116 0
                            -151 -12 -156 -50 -2 -21 52 -87 293 -358 l295 -332 250 0 c304 0 290 6 290
                            -124 0 -79 -2 -86 -26 -105 -21 -17 -41 -21 -95 -21 -37 0 -79 -4 -92 -9 -34
                            -13 -43 -46 -22 -78 10 -14 152 -180 316 -369 257 -294 304 -344 332 -348 17
                            -3 282 -7 587 -9 537 -4 561 -5 725 -30 425 -64 655 -141 715 -239 l17 -29
                            294 393 c162 216 443 592 624 835 l330 442 568 1 567 0 0 -1982 c0 -1146 4
                            -2023 10 -2079 30 -309 205 -532 485 -618 70 -21 100 -25 240 -25 138 -1 171
                            2 240 22 242 70 398 230 471 482 18 62 19 147 24 2130 l5 2065 715 5 c787 7
                            760 4 891 71 235 118 367 390 330 679 -39 307 -237 506 -543 549 -49 7 -822
                            11 -2284 11 -2171 1 -2210 1 -2286 -19 -142 -37 -258 -110 -384 -244 -50 -53
                            -275 -355 -618 -831 -297 -410 -543 -745 -548 -744 -4 2 -237 320 -518 708
                            -281 388 -541 743 -578 789 -98 123 -207 213 -327 271 -171 83 -104 79 -1247
                            71z"/>
                            <path d="M13350 5518 c0 -79 -210 -162 -586 -232 -307 -57 -322 -58 -922 -63
                        l-562 -5 -79 -86 c-43 -48 -187 -211 -320 -362 -212 -241 -241 -279 -239 -305
                        4 -41 37 -55 131 -55 106 0 117 -11 117 -123 0 -74 -3 -86 -23 -105 -23 -21
                        -31 -22 -268 -22 l-245 0 -292 -340 c-161 -187 -295 -347 -299 -356 -12 -33
                        24 -44 147 -44 109 0 118 -2 138 -23 30 -32 32 -162 3 -198 -19 -24 -21 -24
                        -285 -29 -218 -4 -268 -8 -280 -20 -8 -8 -148 -166 -311 -350 l-296 -335 947
                        -3 c521 -1 950 2 953 6 3 5 36 16 74 26 132 36 242 101 365 220 74 70 77 74
                        700 931 304 418 556 761 560 762 4 1 117 -150 252 -335 741 -1021 889 -1220
                        975 -1310 154 -162 268 -234 431 -273 172 -41 397 -13 544 68 95 53 217 180
                        264 274 103 209 82 456 -55 656 -43 62 -1507 2023 -1525 2043 -12 12 -14 11
                        -14 -12z"/>
                        </g>
                </svg>
            </div>
        </>
    )
}

export default Logo