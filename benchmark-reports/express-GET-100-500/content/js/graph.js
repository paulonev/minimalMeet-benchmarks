/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 494.0, "series": [{"data": [[0.0, 7.0], [0.1, 8.0], [0.2, 9.0], [0.3, 9.0], [0.4, 10.0], [0.5, 10.0], [0.6, 11.0], [0.7, 12.0], [0.8, 13.0], [0.9, 14.0], [1.0, 14.0], [1.1, 16.0], [1.2, 16.0], [1.3, 17.0], [1.4, 18.0], [1.5, 19.0], [1.6, 20.0], [1.7, 20.0], [1.8, 21.0], [1.9, 21.0], [2.0, 22.0], [2.1, 22.0], [2.2, 23.0], [2.3, 24.0], [2.4, 25.0], [2.5, 25.0], [2.6, 26.0], [2.7, 27.0], [2.8, 27.0], [2.9, 28.0], [3.0, 28.0], [3.1, 29.0], [3.2, 30.0], [3.3, 30.0], [3.4, 31.0], [3.5, 31.0], [3.6, 32.0], [3.7, 33.0], [3.8, 33.0], [3.9, 34.0], [4.0, 34.0], [4.1, 35.0], [4.2, 35.0], [4.3, 36.0], [4.4, 36.0], [4.5, 37.0], [4.6, 37.0], [4.7, 38.0], [4.8, 39.0], [4.9, 39.0], [5.0, 40.0], [5.1, 41.0], [5.2, 41.0], [5.3, 42.0], [5.4, 43.0], [5.5, 43.0], [5.6, 43.0], [5.7, 44.0], [5.8, 45.0], [5.9, 45.0], [6.0, 46.0], [6.1, 47.0], [6.2, 47.0], [6.3, 48.0], [6.4, 49.0], [6.5, 50.0], [6.6, 50.0], [6.7, 51.0], [6.8, 51.0], [6.9, 51.0], [7.0, 52.0], [7.1, 53.0], [7.2, 54.0], [7.3, 54.0], [7.4, 55.0], [7.5, 56.0], [7.6, 56.0], [7.7, 57.0], [7.8, 57.0], [7.9, 58.0], [8.0, 59.0], [8.1, 59.0], [8.2, 60.0], [8.3, 60.0], [8.4, 61.0], [8.5, 62.0], [8.6, 62.0], [8.7, 63.0], [8.8, 64.0], [8.9, 65.0], [9.0, 66.0], [9.1, 66.0], [9.2, 67.0], [9.3, 68.0], [9.4, 69.0], [9.5, 69.0], [9.6, 70.0], [9.7, 71.0], [9.8, 71.0], [9.9, 72.0], [10.0, 73.0], [10.1, 74.0], [10.2, 74.0], [10.3, 75.0], [10.4, 75.0], [10.5, 76.0], [10.6, 76.0], [10.7, 77.0], [10.8, 77.0], [10.9, 78.0], [11.0, 79.0], [11.1, 79.0], [11.2, 80.0], [11.3, 81.0], [11.4, 82.0], [11.5, 82.0], [11.6, 83.0], [11.7, 84.0], [11.8, 84.0], [11.9, 85.0], [12.0, 85.0], [12.1, 86.0], [12.2, 87.0], [12.3, 87.0], [12.4, 88.0], [12.5, 89.0], [12.6, 90.0], [12.7, 90.0], [12.8, 91.0], [12.9, 91.0], [13.0, 92.0], [13.1, 93.0], [13.2, 93.0], [13.3, 94.0], [13.4, 94.0], [13.5, 95.0], [13.6, 95.0], [13.7, 96.0], [13.8, 97.0], [13.9, 97.0], [14.0, 98.0], [14.1, 98.0], [14.2, 99.0], [14.3, 99.0], [14.4, 100.0], [14.5, 100.0], [14.6, 100.0], [14.7, 101.0], [14.8, 102.0], [14.9, 102.0], [15.0, 103.0], [15.1, 103.0], [15.2, 104.0], [15.3, 104.0], [15.4, 105.0], [15.5, 106.0], [15.6, 106.0], [15.7, 107.0], [15.8, 108.0], [15.9, 108.0], [16.0, 109.0], [16.1, 110.0], [16.2, 110.0], [16.3, 111.0], [16.4, 111.0], [16.5, 112.0], [16.6, 114.0], [16.7, 115.0], [16.8, 116.0], [16.9, 117.0], [17.0, 118.0], [17.1, 118.0], [17.2, 119.0], [17.3, 119.0], [17.4, 119.0], [17.5, 120.0], [17.6, 120.0], [17.7, 120.0], [17.8, 121.0], [17.9, 121.0], [18.0, 122.0], [18.1, 122.0], [18.2, 123.0], [18.3, 123.0], [18.4, 124.0], [18.5, 124.0], [18.6, 124.0], [18.7, 125.0], [18.8, 125.0], [18.9, 126.0], [19.0, 126.0], [19.1, 126.0], [19.2, 127.0], [19.3, 127.0], [19.4, 128.0], [19.5, 129.0], [19.6, 130.0], [19.7, 130.0], [19.8, 131.0], [19.9, 131.0], [20.0, 132.0], [20.1, 132.0], [20.2, 132.0], [20.3, 133.0], [20.4, 133.0], [20.5, 134.0], [20.6, 135.0], [20.7, 137.0], [20.8, 138.0], [20.9, 139.0], [21.0, 139.0], [21.1, 140.0], [21.2, 140.0], [21.3, 141.0], [21.4, 142.0], [21.5, 143.0], [21.6, 143.0], [21.7, 143.0], [21.8, 144.0], [21.9, 144.0], [22.0, 145.0], [22.1, 145.0], [22.2, 146.0], [22.3, 146.0], [22.4, 147.0], [22.5, 147.0], [22.6, 148.0], [22.7, 148.0], [22.8, 149.0], [22.9, 150.0], [23.0, 151.0], [23.1, 151.0], [23.2, 152.0], [23.3, 152.0], [23.4, 152.0], [23.5, 153.0], [23.6, 153.0], [23.7, 154.0], [23.8, 154.0], [23.9, 155.0], [24.0, 155.0], [24.1, 155.0], [24.2, 156.0], [24.3, 156.0], [24.4, 156.0], [24.5, 157.0], [24.6, 157.0], [24.7, 158.0], [24.8, 158.0], [24.9, 159.0], [25.0, 160.0], [25.1, 161.0], [25.2, 161.0], [25.3, 162.0], [25.4, 163.0], [25.5, 164.0], [25.6, 164.0], [25.7, 165.0], [25.8, 165.0], [25.9, 166.0], [26.0, 166.0], [26.1, 166.0], [26.2, 167.0], [26.3, 168.0], [26.4, 169.0], [26.5, 170.0], [26.6, 172.0], [26.7, 172.0], [26.8, 173.0], [26.9, 174.0], [27.0, 174.0], [27.1, 175.0], [27.2, 175.0], [27.3, 176.0], [27.4, 176.0], [27.5, 177.0], [27.6, 177.0], [27.7, 178.0], [27.8, 179.0], [27.9, 179.0], [28.0, 180.0], [28.1, 180.0], [28.2, 181.0], [28.3, 182.0], [28.4, 184.0], [28.5, 184.0], [28.6, 184.0], [28.7, 185.0], [28.8, 185.0], [28.9, 186.0], [29.0, 187.0], [29.1, 188.0], [29.2, 188.0], [29.3, 189.0], [29.4, 189.0], [29.5, 189.0], [29.6, 190.0], [29.7, 190.0], [29.8, 191.0], [29.9, 191.0], [30.0, 192.0], [30.1, 192.0], [30.2, 194.0], [30.3, 194.0], [30.4, 196.0], [30.5, 197.0], [30.6, 197.0], [30.7, 198.0], [30.8, 199.0], [30.9, 199.0], [31.0, 200.0], [31.1, 201.0], [31.2, 202.0], [31.3, 203.0], [31.4, 203.0], [31.5, 204.0], [31.6, 205.0], [31.7, 206.0], [31.8, 208.0], [31.9, 211.0], [32.0, 213.0], [32.1, 213.0], [32.2, 214.0], [32.3, 214.0], [32.4, 215.0], [32.5, 215.0], [32.6, 215.0], [32.7, 216.0], [32.8, 216.0], [32.9, 217.0], [33.0, 217.0], [33.1, 218.0], [33.2, 219.0], [33.3, 220.0], [33.4, 220.0], [33.5, 221.0], [33.6, 221.0], [33.7, 222.0], [33.8, 222.0], [33.9, 223.0], [34.0, 223.0], [34.1, 224.0], [34.2, 224.0], [34.3, 225.0], [34.4, 225.0], [34.5, 226.0], [34.6, 226.0], [34.7, 227.0], [34.8, 228.0], [34.9, 228.0], [35.0, 228.0], [35.1, 229.0], [35.2, 229.0], [35.3, 230.0], [35.4, 230.0], [35.5, 231.0], [35.6, 231.0], [35.7, 232.0], [35.8, 232.0], [35.9, 233.0], [36.0, 234.0], [36.1, 234.0], [36.2, 235.0], [36.3, 235.0], [36.4, 235.0], [36.5, 236.0], [36.6, 237.0], [36.7, 238.0], [36.8, 238.0], [36.9, 239.0], [37.0, 239.0], [37.1, 239.0], [37.2, 240.0], [37.3, 240.0], [37.4, 241.0], [37.5, 241.0], [37.6, 242.0], [37.7, 242.0], [37.8, 242.0], [37.9, 243.0], [38.0, 243.0], [38.1, 244.0], [38.2, 244.0], [38.3, 244.0], [38.4, 245.0], [38.5, 245.0], [38.6, 246.0], [38.7, 246.0], [38.8, 247.0], [38.9, 247.0], [39.0, 248.0], [39.1, 248.0], [39.2, 248.0], [39.3, 249.0], [39.4, 249.0], [39.5, 250.0], [39.6, 250.0], [39.7, 251.0], [39.8, 251.0], [39.9, 252.0], [40.0, 252.0], [40.1, 253.0], [40.2, 254.0], [40.3, 256.0], [40.4, 261.0], [40.5, 263.0], [40.6, 265.0], [40.7, 266.0], [40.8, 267.0], [40.9, 269.0], [41.0, 270.0], [41.1, 271.0], [41.2, 271.0], [41.3, 272.0], [41.4, 272.0], [41.5, 272.0], [41.6, 273.0], [41.7, 273.0], [41.8, 274.0], [41.9, 274.0], [42.0, 275.0], [42.1, 275.0], [42.2, 275.0], [42.3, 276.0], [42.4, 276.0], [42.5, 277.0], [42.6, 277.0], [42.7, 278.0], [42.8, 278.0], [42.9, 279.0], [43.0, 279.0], [43.1, 281.0], [43.2, 282.0], [43.3, 283.0], [43.4, 284.0], [43.5, 284.0], [43.6, 285.0], [43.7, 285.0], [43.8, 285.0], [43.9, 285.0], [44.0, 286.0], [44.1, 286.0], [44.2, 286.0], [44.3, 287.0], [44.4, 287.0], [44.5, 288.0], [44.6, 288.0], [44.7, 288.0], [44.8, 289.0], [44.9, 289.0], [45.0, 290.0], [45.1, 292.0], [45.2, 293.0], [45.3, 293.0], [45.4, 294.0], [45.5, 294.0], [45.6, 295.0], [45.7, 295.0], [45.8, 296.0], [45.9, 297.0], [46.0, 298.0], [46.1, 298.0], [46.2, 299.0], [46.3, 299.0], [46.4, 300.0], [46.5, 300.0], [46.6, 301.0], [46.7, 301.0], [46.8, 302.0], [46.9, 302.0], [47.0, 303.0], [47.1, 303.0], [47.2, 304.0], [47.3, 305.0], [47.4, 306.0], [47.5, 307.0], [47.6, 308.0], [47.7, 309.0], [47.8, 311.0], [47.9, 313.0], [48.0, 313.0], [48.1, 315.0], [48.2, 316.0], [48.3, 317.0], [48.4, 318.0], [48.5, 319.0], [48.6, 320.0], [48.7, 320.0], [48.8, 321.0], [48.9, 321.0], [49.0, 322.0], [49.1, 322.0], [49.2, 323.0], [49.3, 323.0], [49.4, 324.0], [49.5, 324.0], [49.6, 325.0], [49.7, 325.0], [49.8, 326.0], [49.9, 327.0], [50.0, 328.0], [50.1, 329.0], [50.2, 332.0], [50.3, 335.0], [50.4, 338.0], [50.5, 345.0], [50.6, 350.0], [50.7, 355.0], [50.8, 361.0], [50.9, 366.0], [51.0, 370.0], [51.1, 374.0], [51.2, 375.0], [51.3, 376.0], [51.4, 376.0], [51.5, 377.0], [51.6, 379.0], [51.7, 380.0], [51.8, 380.0], [51.9, 381.0], [52.0, 382.0], [52.1, 382.0], [52.2, 383.0], [52.3, 383.0], [52.4, 384.0], [52.5, 384.0], [52.6, 384.0], [52.7, 385.0], [52.8, 385.0], [52.9, 385.0], [53.0, 386.0], [53.1, 386.0], [53.2, 386.0], [53.3, 387.0], [53.4, 387.0], [53.5, 387.0], [53.6, 387.0], [53.7, 388.0], [53.8, 388.0], [53.9, 388.0], [54.0, 388.0], [54.1, 388.0], [54.2, 388.0], [54.3, 389.0], [54.4, 389.0], [54.5, 389.0], [54.6, 389.0], [54.7, 390.0], [54.8, 390.0], [54.9, 390.0], [55.0, 390.0], [55.1, 390.0], [55.2, 391.0], [55.3, 391.0], [55.4, 391.0], [55.5, 391.0], [55.6, 391.0], [55.7, 392.0], [55.8, 392.0], [55.9, 392.0], [56.0, 392.0], [56.1, 392.0], [56.2, 392.0], [56.3, 392.0], [56.4, 393.0], [56.5, 393.0], [56.6, 393.0], [56.7, 393.0], [56.8, 393.0], [56.9, 393.0], [57.0, 393.0], [57.1, 393.0], [57.2, 394.0], [57.3, 394.0], [57.4, 394.0], [57.5, 394.0], [57.6, 394.0], [57.7, 394.0], [57.8, 395.0], [57.9, 395.0], [58.0, 395.0], [58.1, 395.0], [58.2, 395.0], [58.3, 395.0], [58.4, 395.0], [58.5, 396.0], [58.6, 396.0], [58.7, 396.0], [58.8, 396.0], [58.9, 396.0], [59.0, 396.0], [59.1, 396.0], [59.2, 397.0], [59.3, 397.0], [59.4, 397.0], [59.5, 397.0], [59.6, 397.0], [59.7, 397.0], [59.8, 397.0], [59.9, 398.0], [60.0, 398.0], [60.1, 398.0], [60.2, 398.0], [60.3, 398.0], [60.4, 398.0], [60.5, 398.0], [60.6, 398.0], [60.7, 399.0], [60.8, 399.0], [60.9, 399.0], [61.0, 399.0], [61.1, 399.0], [61.2, 399.0], [61.3, 399.0], [61.4, 399.0], [61.5, 399.0], [61.6, 400.0], [61.7, 400.0], [61.8, 400.0], [61.9, 400.0], [62.0, 400.0], [62.1, 400.0], [62.2, 400.0], [62.3, 400.0], [62.4, 400.0], [62.5, 401.0], [62.6, 401.0], [62.7, 401.0], [62.8, 401.0], [62.9, 401.0], [63.0, 401.0], [63.1, 401.0], [63.2, 401.0], [63.3, 401.0], [63.4, 402.0], [63.5, 402.0], [63.6, 402.0], [63.7, 402.0], [63.8, 402.0], [63.9, 402.0], [64.0, 402.0], [64.1, 402.0], [64.2, 402.0], [64.3, 402.0], [64.4, 403.0], [64.5, 403.0], [64.6, 403.0], [64.7, 403.0], [64.8, 403.0], [64.9, 403.0], [65.0, 403.0], [65.1, 403.0], [65.2, 403.0], [65.3, 403.0], [65.4, 404.0], [65.5, 404.0], [65.6, 404.0], [65.7, 404.0], [65.8, 404.0], [65.9, 404.0], [66.0, 404.0], [66.1, 404.0], [66.2, 404.0], [66.3, 404.0], [66.4, 404.0], [66.5, 405.0], [66.6, 405.0], [66.7, 405.0], [66.8, 405.0], [66.9, 405.0], [67.0, 405.0], [67.1, 405.0], [67.2, 405.0], [67.3, 405.0], [67.4, 406.0], [67.5, 406.0], [67.6, 406.0], [67.7, 406.0], [67.8, 406.0], [67.9, 406.0], [68.0, 406.0], [68.1, 406.0], [68.2, 406.0], [68.3, 406.0], [68.4, 407.0], [68.5, 407.0], [68.6, 407.0], [68.7, 407.0], [68.8, 407.0], [68.9, 407.0], [69.0, 407.0], [69.1, 407.0], [69.2, 407.0], [69.3, 407.0], [69.4, 408.0], [69.5, 408.0], [69.6, 408.0], [69.7, 408.0], [69.8, 408.0], [69.9, 408.0], [70.0, 408.0], [70.1, 408.0], [70.2, 408.0], [70.3, 408.0], [70.4, 408.0], [70.5, 409.0], [70.6, 409.0], [70.7, 409.0], [70.8, 409.0], [70.9, 409.0], [71.0, 409.0], [71.1, 409.0], [71.2, 409.0], [71.3, 410.0], [71.4, 410.0], [71.5, 410.0], [71.6, 410.0], [71.7, 410.0], [71.8, 410.0], [71.9, 410.0], [72.0, 410.0], [72.1, 410.0], [72.2, 410.0], [72.3, 411.0], [72.4, 411.0], [72.5, 411.0], [72.6, 411.0], [72.7, 411.0], [72.8, 411.0], [72.9, 411.0], [73.0, 411.0], [73.1, 411.0], [73.2, 412.0], [73.3, 412.0], [73.4, 412.0], [73.5, 412.0], [73.6, 412.0], [73.7, 412.0], [73.8, 412.0], [73.9, 412.0], [74.0, 413.0], [74.1, 413.0], [74.2, 413.0], [74.3, 413.0], [74.4, 413.0], [74.5, 413.0], [74.6, 413.0], [74.7, 414.0], [74.8, 414.0], [74.9, 414.0], [75.0, 414.0], [75.1, 414.0], [75.2, 414.0], [75.3, 414.0], [75.4, 414.0], [75.5, 415.0], [75.6, 415.0], [75.7, 415.0], [75.8, 415.0], [75.9, 415.0], [76.0, 415.0], [76.1, 415.0], [76.2, 416.0], [76.3, 416.0], [76.4, 416.0], [76.5, 416.0], [76.6, 416.0], [76.7, 416.0], [76.8, 416.0], [76.9, 417.0], [77.0, 417.0], [77.1, 417.0], [77.2, 417.0], [77.3, 417.0], [77.4, 417.0], [77.5, 417.0], [77.6, 417.0], [77.7, 417.0], [77.8, 418.0], [77.9, 418.0], [78.0, 418.0], [78.1, 418.0], [78.2, 418.0], [78.3, 418.0], [78.4, 418.0], [78.5, 418.0], [78.6, 419.0], [78.7, 419.0], [78.8, 419.0], [78.9, 419.0], [79.0, 419.0], [79.1, 419.0], [79.2, 419.0], [79.3, 420.0], [79.4, 420.0], [79.5, 420.0], [79.6, 420.0], [79.7, 420.0], [79.8, 421.0], [79.9, 421.0], [80.0, 421.0], [80.1, 421.0], [80.2, 421.0], [80.3, 421.0], [80.4, 421.0], [80.5, 422.0], [80.6, 422.0], [80.7, 422.0], [80.8, 422.0], [80.9, 422.0], [81.0, 422.0], [81.1, 422.0], [81.2, 422.0], [81.3, 423.0], [81.4, 423.0], [81.5, 423.0], [81.6, 423.0], [81.7, 423.0], [81.8, 423.0], [81.9, 423.0], [82.0, 424.0], [82.1, 424.0], [82.2, 424.0], [82.3, 424.0], [82.4, 424.0], [82.5, 424.0], [82.6, 424.0], [82.7, 424.0], [82.8, 425.0], [82.9, 425.0], [83.0, 425.0], [83.1, 425.0], [83.2, 425.0], [83.3, 425.0], [83.4, 425.0], [83.5, 425.0], [83.6, 425.0], [83.7, 426.0], [83.8, 426.0], [83.9, 426.0], [84.0, 426.0], [84.1, 426.0], [84.2, 426.0], [84.3, 426.0], [84.4, 427.0], [84.5, 427.0], [84.6, 427.0], [84.7, 427.0], [84.8, 427.0], [84.9, 427.0], [85.0, 428.0], [85.1, 428.0], [85.2, 428.0], [85.3, 428.0], [85.4, 428.0], [85.5, 429.0], [85.6, 429.0], [85.7, 429.0], [85.8, 429.0], [85.9, 429.0], [86.0, 430.0], [86.1, 430.0], [86.2, 430.0], [86.3, 430.0], [86.4, 430.0], [86.5, 431.0], [86.6, 431.0], [86.7, 431.0], [86.8, 431.0], [86.9, 431.0], [87.0, 432.0], [87.1, 432.0], [87.2, 432.0], [87.3, 432.0], [87.4, 432.0], [87.5, 433.0], [87.6, 433.0], [87.7, 433.0], [87.8, 433.0], [87.9, 434.0], [88.0, 434.0], [88.1, 434.0], [88.2, 434.0], [88.3, 434.0], [88.4, 435.0], [88.5, 435.0], [88.6, 435.0], [88.7, 435.0], [88.8, 436.0], [88.9, 436.0], [89.0, 436.0], [89.1, 437.0], [89.2, 437.0], [89.3, 437.0], [89.4, 437.0], [89.5, 437.0], [89.6, 438.0], [89.7, 438.0], [89.8, 438.0], [89.9, 439.0], [90.0, 439.0], [90.1, 439.0], [90.2, 439.0], [90.3, 440.0], [90.4, 440.0], [90.5, 440.0], [90.6, 441.0], [90.7, 441.0], [90.8, 441.0], [90.9, 442.0], [91.0, 442.0], [91.1, 442.0], [91.2, 443.0], [91.3, 443.0], [91.4, 443.0], [91.5, 444.0], [91.6, 444.0], [91.7, 444.0], [91.8, 444.0], [91.9, 445.0], [92.0, 445.0], [92.1, 445.0], [92.2, 445.0], [92.3, 446.0], [92.4, 446.0], [92.5, 446.0], [92.6, 446.0], [92.7, 447.0], [92.8, 447.0], [92.9, 447.0], [93.0, 447.0], [93.1, 448.0], [93.2, 448.0], [93.3, 448.0], [93.4, 449.0], [93.5, 449.0], [93.6, 449.0], [93.7, 450.0], [93.8, 450.0], [93.9, 451.0], [94.0, 452.0], [94.1, 452.0], [94.2, 452.0], [94.3, 453.0], [94.4, 453.0], [94.5, 454.0], [94.6, 454.0], [94.7, 455.0], [94.8, 455.0], [94.9, 455.0], [95.0, 456.0], [95.1, 456.0], [95.2, 457.0], [95.3, 457.0], [95.4, 457.0], [95.5, 458.0], [95.6, 458.0], [95.7, 459.0], [95.8, 459.0], [95.9, 460.0], [96.0, 460.0], [96.1, 461.0], [96.2, 461.0], [96.3, 462.0], [96.4, 462.0], [96.5, 463.0], [96.6, 463.0], [96.7, 464.0], [96.8, 464.0], [96.9, 465.0], [97.0, 465.0], [97.1, 466.0], [97.2, 466.0], [97.3, 467.0], [97.4, 467.0], [97.5, 467.0], [97.6, 468.0], [97.7, 468.0], [97.8, 469.0], [97.9, 469.0], [98.0, 470.0], [98.1, 470.0], [98.2, 471.0], [98.3, 471.0], [98.4, 471.0], [98.5, 472.0], [98.6, 473.0], [98.7, 473.0], [98.8, 473.0], [98.9, 474.0], [99.0, 474.0], [99.1, 475.0], [99.2, 475.0], [99.3, 476.0], [99.4, 477.0], [99.5, 478.0], [99.6, 479.0], [99.7, 480.0], [99.8, 489.0], [99.9, 491.0], [100.0, 494.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2240.0, "minX": 0.0, "maxY": 5980.0, "series": [{"data": [[0.0, 2240.0], [300.0, 2369.0], [100.0, 2578.0], [200.0, 2398.0], [400.0, 5980.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 15565.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 15565.0, "series": [{"data": [[0.0, 15565.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.32380151387721, "minX": 1.698525415E12, "maxY": 100.0, "series": [{"data": [[1.698525445E12, 100.0], [1.698525465E12, 100.0], [1.69852542E12, 25.052264808362374], [1.69852545E12, 100.0], [1.69852547E12, 100.0], [1.698525425E12, 41.71143250688705], [1.698525455E12, 100.0], [1.698525475E12, 65.14788732394368], [1.69852543E12, 58.25191370911621], [1.69852544E12, 91.27170658682634], [1.69852546E12, 100.0], [1.698525415E12, 9.32380151387721], [1.698525435E12, 74.93947923997177]], "isOverall": false, "label": "MinimalMeet-express", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698525475E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 9.375000000000002, "minX": 1.0, "maxY": 454.3857142857143, "series": [{"data": [[2.0, 23.89655172413793], [3.0, 18.028985507246382], [4.0, 21.315068493150683], [5.0, 24.013157894736842], [6.0, 28.539473684210527], [7.0, 32.879999999999995], [8.0, 35.24675324675325], [9.0, 36.271604938271594], [10.0, 42.44444444444444], [11.0, 41.43181818181819], [12.0, 45.51162790697675], [13.0, 48.4431818181818], [14.0, 52.52941176470587], [15.0, 57.6144578313253], [16.0, 62.214285714285715], [17.0, 64.45238095238096], [18.0, 72.07594936708865], [19.0, 68.6179775280899], [20.0, 69.92134831460675], [21.0, 77.08045977011496], [22.0, 81.50602409638553], [23.0, 81.1666666666667], [24.0, 93.94999999999999], [25.0, 96.62962962962963], [26.0, 87.38297872340425], [27.0, 91.03333333333339], [28.0, 98.3863636363636], [29.0, 104.47727272727272], [30.0, 99.53191489361703], [31.0, 114.578313253012], [32.0, 107.79999999999998], [33.0, 114.38636363636363], [34.0, 122.69767441860463], [35.0, 134.50617283950615], [36.0, 126.9761904761905], [37.0, 131.6263736263737], [38.0, 126.13043478260869], [39.0, 132.52222222222218], [40.0, 134.7362637362638], [41.0, 143.73563218390805], [42.0, 160.61728395061726], [43.0, 144.4565217391304], [44.0, 149.86956521739125], [45.0, 151.09090909090907], [46.0, 156.876404494382], [47.0, 163.99999999999991], [48.0, 170.71910112359555], [49.0, 163.13043478260872], [50.0, 163.54838709677412], [51.0, 171.8089887640449], [52.0, 179.2159090909091], [53.0, 197.09756097560984], [54.0, 181.72043010752688], [55.0, 187.4204545454546], [56.0, 190.28888888888892], [57.0, 195.42857142857142], [58.0, 224.7625], [59.0, 204.08888888888887], [60.0, 198.4193548387097], [61.0, 210.939024390244], [62.0, 221.64367816091956], [63.0, 224.3793103448277], [64.0, 231.7058823529412], [65.0, 217.05494505494502], [66.0, 231.6547619047619], [67.0, 229.63333333333327], [68.0, 238.144578313253], [69.0, 251.94999999999993], [70.0, 252.3258426966293], [71.0, 238.09999999999988], [72.0, 244.69318181818178], [73.0, 246.30434782608694], [74.0, 247.73033707865173], [75.0, 285.83749999999975], [76.0, 253.7608695652174], [77.0, 258.50574712643686], [78.0, 284.2592592592592], [79.0, 286.5365853658535], [80.0, 296.15189873417705], [81.0, 310.9166666666667], [82.0, 278.34065934065933], [83.0, 276.4239130434782], [84.0, 274.94505494505484], [85.0, 290.49425287356314], [86.0, 310.759493670886], [87.0, 306.7717391304348], [88.0, 294.8295454545455], [89.0, 304.5955056179775], [90.0, 304.5057471264368], [91.0, 344.6197183098591], [92.0, 399.2089552238805], [93.0, 385.6987951807227], [94.0, 326.0449438202248], [95.0, 324.05747126436773], [96.0, 330.2], [97.0, 363.6842105263157], [98.0, 410.1587301587301], [99.0, 454.3857142857143], [100.0, 419.37763012181676], [1.0, 9.375000000000002]], "isOverall": false, "label": "GET /meetings", "isController": false}, {"data": [[73.51673626726594, 291.2768390619953]], "isOverall": false, "label": "GET /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4004.4, "minX": 1.698525415E12, "maxY": 2.98507968E7, "series": [{"data": [[1.698525445E12, 2.467008E7], [1.698525465E12, 2.49990144E7], [1.69852542E12, 2.9501304E7], [1.69852545E12, 2.41150032E7], [1.69852547E12, 2.4464496E7], [1.698525425E12, 2.98507968E7], [1.698525455E12, 2.45467296E7], [1.698525475E12, 2919292.8], [1.69852543E12, 2.95424208E7], [1.69852544E12, 2.74660224E7], [1.69852546E12, 2.4258912E7], [1.698525415E12, 2.44439376E7], [1.698525435E12, 2.92134864E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.698525445E12, 33840.0], [1.698525465E12, 34291.2], [1.69852542E12, 40467.0], [1.69852545E12, 33078.6], [1.69852547E12, 33558.0], [1.698525425E12, 40946.4], [1.698525455E12, 33670.8], [1.698525475E12, 4004.4], [1.69852543E12, 40523.4], [1.69852544E12, 37675.2], [1.69852546E12, 33276.0], [1.698525415E12, 33529.8], [1.698525435E12, 40072.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698525475E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 33.76450798990751, "minX": 1.698525415E12, "maxY": 439.97887323943667, "series": [{"data": [[1.698525445E12, 418.26000000000033], [1.698525465E12, 413.48437499999994], [1.69852542E12, 85.74425087108024], [1.69852545E12, 421.7919863597618], [1.69852547E12, 417.3714285714291], [1.698525425E12, 141.55234159779604], [1.698525455E12, 421.3693467336683], [1.698525475E12, 439.97887323943667], [1.69852543E12, 200.10925539318026], [1.69852544E12, 334.4341317365273], [1.69852546E12, 422.3110169491531], [1.698525415E12, 33.76450798990751], [1.698525435E12, 260.7867698803656]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698525475E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 32.93608074011775, "minX": 1.698525415E12, "maxY": 438.92957746478874, "series": [{"data": [[1.698525445E12, 417.2025000000001], [1.698525465E12, 412.4967105263159], [1.69852542E12, 84.91637630662011], [1.69852545E12, 420.74254049445847], [1.69852547E12, 416.34873949579844], [1.698525425E12, 140.69903581267178], [1.698525455E12, 420.3576214405362], [1.698525475E12, 438.92957746478874], [1.69852543E12, 199.1934585942938], [1.69852544E12, 333.5014970059881], [1.69852546E12, 421.2627118644063], [1.698525415E12, 32.93608074011775], [1.698525435E12, 259.9099225897259]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698525475E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.7052264808362365, "minX": 1.698525415E12, "maxY": 0.8802816901408455, "series": [{"data": [[1.698525445E12, 0.8658333333333336], [1.698525465E12, 0.8190789473684208], [1.69852542E12, 0.7052264808362365], [1.69852545E12, 0.8797953964194374], [1.69852547E12, 0.8134453781512592], [1.698525425E12, 0.7438016528925623], [1.698525455E12, 0.8442211055276373], [1.698525475E12, 0.8802816901408455], [1.69852543E12, 0.7620041753653445], [1.69852544E12, 0.7799401197604794], [1.69852546E12, 0.8618644067796603], [1.698525415E12, 0.8469301934398653], [1.698525435E12, 0.772695285010558]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698525475E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.698525415E12, "maxY": 494.0, "series": [{"data": [[1.698525445E12, 483.0], [1.698525465E12, 478.0], [1.69852542E12, 136.0], [1.69852545E12, 480.0], [1.69852547E12, 473.0], [1.698525425E12, 184.0], [1.698525455E12, 494.0], [1.698525475E12, 470.0], [1.69852543E12, 244.0], [1.69852544E12, 476.0], [1.69852546E12, 479.0], [1.698525415E12, 239.0], [1.698525435E12, 322.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.698525445E12, 389.0], [1.698525465E12, 373.0], [1.69852542E12, 40.0], [1.69852545E12, 380.0], [1.69852547E12, 380.0], [1.698525425E12, 110.0], [1.698525455E12, 374.0], [1.698525475E12, 404.0], [1.69852543E12, 157.0], [1.69852544E12, 269.0], [1.69852546E12, 381.0], [1.698525415E12, 7.0], [1.698525435E12, 222.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.698525445E12, 454.0], [1.698525465E12, 428.0], [1.69852542E12, 108.0], [1.69852545E12, 462.0], [1.69852547E12, 460.0], [1.698525425E12, 163.0], [1.698525455E12, 461.0], [1.698525475E12, 465.0], [1.69852543E12, 229.0], [1.69852544E12, 409.29999999999995], [1.69852546E12, 455.0], [1.698525415E12, 54.0], [1.698525435E12, 292.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.698525445E12, 476.0], [1.698525465E12, 472.0], [1.69852542E12, 125.6400000000001], [1.69852545E12, 477.0], [1.69852547E12, 471.0], [1.698525425E12, 180.0], [1.698525455E12, 492.0], [1.698525475E12, 469.14], [1.69852543E12, 240.0], [1.69852544E12, 469.0], [1.69852546E12, 476.19000000000005], [1.698525415E12, 71.0], [1.698525435E12, 316.78]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.698525445E12, 411.0], [1.698525465E12, 414.0], [1.69852542E12, 87.0], [1.69852545E12, 414.0], [1.69852547E12, 410.0], [1.698525425E12, 143.0], [1.698525455E12, 419.0], [1.698525475E12, 443.0], [1.69852543E12, 198.0], [1.69852544E12, 321.0], [1.69852546E12, 419.0], [1.698525415E12, 33.0], [1.698525435E12, 252.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.698525445E12, 463.0], [1.698525465E12, 446.0], [1.69852542E12, 111.0], [1.69852545E12, 472.0], [1.69852547E12, 466.0], [1.698525425E12, 168.0], [1.698525455E12, 476.25], [1.698525475E12, 467.0], [1.69852543E12, 233.0], [1.69852544E12, 445.0], [1.69852546E12, 469.95000000000005], [1.698525415E12, 59.0], [1.698525435E12, 305.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698525475E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 125.0, "maxY": 443.0, "series": [{"data": [[125.0, 10.0], [142.0, 443.0], [222.0, 438.5], [225.0, 440.5], [226.0, 433.5], [231.0, 408.0], [229.0, 439.0], [227.0, 439.0], [234.0, 414.0], [239.0, 425.5], [232.0, 415.0], [238.0, 416.0], [237.0, 409.0], [245.0, 396.0], [244.0, 407.0], [247.0, 403.0], [242.0, 408.5], [241.0, 418.5], [240.0, 410.0], [249.0, 406.0], [254.0, 401.0], [259.0, 30.0], [286.0, 143.0], [283.0, 126.0], [277.0, 52.0], [280.0, 163.5], [282.0, 159.5], [272.0, 123.0], [287.0, 174.0], [274.0, 283.0], [284.0, 278.0], [285.0, 285.0], [294.0, 94.0], [293.0, 106.0], [303.0, 126.0], [296.0, 151.0], [295.0, 240.0], [297.0, 185.0], [288.0, 241.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 303.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 9.0, "minX": 125.0, "maxY": 442.0, "series": [{"data": [[125.0, 9.0], [142.0, 442.0], [222.0, 437.0], [225.0, 439.5], [226.0, 433.0], [231.0, 407.0], [229.0, 438.0], [227.0, 438.0], [234.0, 413.0], [239.0, 424.0], [232.0, 414.5], [238.0, 415.0], [237.0, 408.0], [245.0, 395.0], [244.0, 406.0], [247.0, 402.0], [242.0, 407.5], [241.0, 417.0], [240.0, 409.0], [249.0, 405.0], [254.0, 400.0], [259.0, 29.0], [286.0, 142.0], [283.0, 125.0], [277.0, 51.0], [280.0, 163.0], [282.0, 158.5], [272.0, 122.0], [287.0, 173.0], [274.0, 282.0], [284.0, 278.0], [285.0, 285.0], [294.0, 94.0], [293.0, 105.0], [303.0, 125.0], [296.0, 150.0], [295.0, 239.0], [297.0, 184.0], [288.0, 240.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 303.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.4, "minX": 1.698525415E12, "maxY": 293.8, "series": [{"data": [[1.698525445E12, 240.0], [1.698525465E12, 243.2], [1.69852542E12, 290.2], [1.69852545E12, 234.6], [1.69852547E12, 238.0], [1.698525425E12, 293.8], [1.698525455E12, 238.8], [1.698525475E12, 8.4], [1.69852543E12, 290.8], [1.69852544E12, 270.8], [1.69852546E12, 236.0], [1.698525415E12, 241.2], [1.698525435E12, 287.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698525475E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 28.4, "minX": 1.698525415E12, "maxY": 290.4, "series": [{"data": [[1.698525445E12, 240.0], [1.698525465E12, 243.2], [1.69852542E12, 287.0], [1.69852545E12, 234.6], [1.69852547E12, 238.0], [1.698525425E12, 290.4], [1.698525455E12, 238.8], [1.698525475E12, 28.4], [1.69852543E12, 287.4], [1.69852544E12, 267.2], [1.69852546E12, 236.0], [1.698525415E12, 237.8], [1.698525435E12, 284.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698525475E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 28.4, "minX": 1.698525415E12, "maxY": 290.4, "series": [{"data": [[1.698525445E12, 240.0], [1.698525465E12, 243.2], [1.69852542E12, 287.0], [1.69852545E12, 234.6], [1.69852547E12, 238.0], [1.698525425E12, 290.4], [1.698525455E12, 238.8], [1.698525475E12, 28.4], [1.69852543E12, 287.4], [1.69852544E12, 267.2], [1.69852546E12, 236.0], [1.698525415E12, 237.8], [1.698525435E12, 284.2]], "isOverall": false, "label": "GET /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698525475E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 28.4, "minX": 1.698525415E12, "maxY": 290.4, "series": [{"data": [[1.698525445E12, 240.0], [1.698525465E12, 243.2], [1.69852542E12, 287.0], [1.69852545E12, 234.6], [1.69852547E12, 238.0], [1.698525425E12, 290.4], [1.698525455E12, 238.8], [1.698525475E12, 28.4], [1.69852543E12, 287.4], [1.69852544E12, 267.2], [1.69852546E12, 236.0], [1.698525415E12, 237.8], [1.698525435E12, 284.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698525475E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

