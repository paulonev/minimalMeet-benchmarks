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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 566.0, "series": [{"data": [[0.0, 6.0], [0.1, 8.0], [0.2, 8.0], [0.3, 8.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 10.0], [0.8, 10.0], [0.9, 11.0], [1.0, 11.0], [1.1, 12.0], [1.2, 12.0], [1.3, 12.0], [1.4, 13.0], [1.5, 13.0], [1.6, 13.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 15.0], [2.4, 16.0], [2.5, 16.0], [2.6, 16.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 19.0], [3.4, 19.0], [3.5, 19.0], [3.6, 19.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 20.0], [4.1, 21.0], [4.2, 21.0], [4.3, 21.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 23.0], [4.9, 23.0], [5.0, 23.0], [5.1, 23.0], [5.2, 24.0], [5.3, 24.0], [5.4, 24.0], [5.5, 25.0], [5.6, 25.0], [5.7, 25.0], [5.8, 25.0], [5.9, 26.0], [6.0, 26.0], [6.1, 26.0], [6.2, 27.0], [6.3, 27.0], [6.4, 27.0], [6.5, 27.0], [6.6, 28.0], [6.7, 28.0], [6.8, 28.0], [6.9, 29.0], [7.0, 29.0], [7.1, 29.0], [7.2, 30.0], [7.3, 30.0], [7.4, 30.0], [7.5, 30.0], [7.6, 31.0], [7.7, 31.0], [7.8, 31.0], [7.9, 31.0], [8.0, 32.0], [8.1, 32.0], [8.2, 32.0], [8.3, 33.0], [8.4, 33.0], [8.5, 33.0], [8.6, 33.0], [8.7, 34.0], [8.8, 34.0], [8.9, 34.0], [9.0, 34.0], [9.1, 35.0], [9.2, 35.0], [9.3, 35.0], [9.4, 36.0], [9.5, 36.0], [9.6, 36.0], [9.7, 37.0], [9.8, 37.0], [9.9, 37.0], [10.0, 38.0], [10.1, 38.0], [10.2, 39.0], [10.3, 39.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 41.0], [10.8, 41.0], [10.9, 41.0], [11.0, 42.0], [11.1, 42.0], [11.2, 43.0], [11.3, 43.0], [11.4, 43.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 45.0], [11.9, 45.0], [12.0, 46.0], [12.1, 46.0], [12.2, 47.0], [12.3, 47.0], [12.4, 47.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 50.0], [13.2, 50.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 52.0], [13.7, 52.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 54.0], [14.2, 54.0], [14.3, 54.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 56.0], [14.8, 56.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 58.0], [15.4, 58.0], [15.5, 59.0], [15.6, 59.0], [15.7, 60.0], [15.8, 60.0], [15.9, 60.0], [16.0, 61.0], [16.1, 61.0], [16.2, 62.0], [16.3, 62.0], [16.4, 62.0], [16.5, 63.0], [16.6, 63.0], [16.7, 64.0], [16.8, 64.0], [16.9, 65.0], [17.0, 65.0], [17.1, 66.0], [17.2, 66.0], [17.3, 67.0], [17.4, 67.0], [17.5, 67.0], [17.6, 68.0], [17.7, 69.0], [17.8, 69.0], [17.9, 69.0], [18.0, 70.0], [18.1, 71.0], [18.2, 71.0], [18.3, 72.0], [18.4, 72.0], [18.5, 72.0], [18.6, 73.0], [18.7, 73.0], [18.8, 74.0], [18.9, 74.0], [19.0, 75.0], [19.1, 75.0], [19.2, 76.0], [19.3, 76.0], [19.4, 77.0], [19.5, 77.0], [19.6, 77.0], [19.7, 78.0], [19.8, 78.0], [19.9, 79.0], [20.0, 79.0], [20.1, 79.0], [20.2, 80.0], [20.3, 80.0], [20.4, 80.0], [20.5, 81.0], [20.6, 81.0], [20.7, 82.0], [20.8, 82.0], [20.9, 83.0], [21.0, 83.0], [21.1, 84.0], [21.2, 84.0], [21.3, 85.0], [21.4, 86.0], [21.5, 87.0], [21.6, 87.0], [21.7, 88.0], [21.8, 88.0], [21.9, 89.0], [22.0, 89.0], [22.1, 90.0], [22.2, 91.0], [22.3, 91.0], [22.4, 92.0], [22.5, 93.0], [22.6, 93.0], [22.7, 94.0], [22.8, 94.0], [22.9, 95.0], [23.0, 96.0], [23.1, 97.0], [23.2, 97.0], [23.3, 98.0], [23.4, 99.0], [23.5, 99.0], [23.6, 100.0], [23.7, 101.0], [23.8, 101.0], [23.9, 102.0], [24.0, 103.0], [24.1, 104.0], [24.2, 104.0], [24.3, 105.0], [24.4, 106.0], [24.5, 107.0], [24.6, 107.0], [24.7, 108.0], [24.8, 109.0], [24.9, 110.0], [25.0, 110.0], [25.1, 111.0], [25.2, 112.0], [25.3, 112.0], [25.4, 113.0], [25.5, 114.0], [25.6, 114.0], [25.7, 115.0], [25.8, 115.0], [25.9, 116.0], [26.0, 117.0], [26.1, 117.0], [26.2, 118.0], [26.3, 118.0], [26.4, 119.0], [26.5, 120.0], [26.6, 120.0], [26.7, 121.0], [26.8, 121.0], [26.9, 122.0], [27.0, 123.0], [27.1, 123.0], [27.2, 124.0], [27.3, 125.0], [27.4, 125.0], [27.5, 126.0], [27.6, 127.0], [27.7, 127.0], [27.8, 128.0], [27.9, 129.0], [28.0, 129.0], [28.1, 130.0], [28.2, 131.0], [28.3, 131.0], [28.4, 132.0], [28.5, 133.0], [28.6, 133.0], [28.7, 134.0], [28.8, 135.0], [28.9, 135.0], [29.0, 136.0], [29.1, 137.0], [29.2, 137.0], [29.3, 138.0], [29.4, 139.0], [29.5, 139.0], [29.6, 140.0], [29.7, 140.0], [29.8, 141.0], [29.9, 141.0], [30.0, 142.0], [30.1, 143.0], [30.2, 143.0], [30.3, 143.0], [30.4, 144.0], [30.5, 144.0], [30.6, 145.0], [30.7, 145.0], [30.8, 146.0], [30.9, 146.0], [31.0, 147.0], [31.1, 147.0], [31.2, 148.0], [31.3, 148.0], [31.4, 149.0], [31.5, 149.0], [31.6, 150.0], [31.7, 150.0], [31.8, 150.0], [31.9, 151.0], [32.0, 151.0], [32.1, 151.0], [32.2, 152.0], [32.3, 153.0], [32.4, 153.0], [32.5, 153.0], [32.6, 154.0], [32.7, 154.0], [32.8, 155.0], [32.9, 155.0], [33.0, 156.0], [33.1, 156.0], [33.2, 156.0], [33.3, 157.0], [33.4, 157.0], [33.5, 158.0], [33.6, 158.0], [33.7, 158.0], [33.8, 159.0], [33.9, 159.0], [34.0, 160.0], [34.1, 160.0], [34.2, 160.0], [34.3, 161.0], [34.4, 161.0], [34.5, 162.0], [34.6, 162.0], [34.7, 162.0], [34.8, 163.0], [34.9, 163.0], [35.0, 164.0], [35.1, 164.0], [35.2, 165.0], [35.3, 165.0], [35.4, 166.0], [35.5, 166.0], [35.6, 167.0], [35.7, 167.0], [35.8, 167.0], [35.9, 168.0], [36.0, 168.0], [36.1, 168.0], [36.2, 169.0], [36.3, 170.0], [36.4, 170.0], [36.5, 171.0], [36.6, 171.0], [36.7, 172.0], [36.8, 172.0], [36.9, 172.0], [37.0, 172.0], [37.1, 173.0], [37.2, 173.0], [37.3, 174.0], [37.4, 174.0], [37.5, 175.0], [37.6, 175.0], [37.7, 175.0], [37.8, 176.0], [37.9, 176.0], [38.0, 177.0], [38.1, 177.0], [38.2, 178.0], [38.3, 178.0], [38.4, 179.0], [38.5, 179.0], [38.6, 179.0], [38.7, 180.0], [38.8, 180.0], [38.9, 181.0], [39.0, 181.0], [39.1, 181.0], [39.2, 182.0], [39.3, 182.0], [39.4, 183.0], [39.5, 183.0], [39.6, 184.0], [39.7, 184.0], [39.8, 184.0], [39.9, 184.0], [40.0, 185.0], [40.1, 185.0], [40.2, 185.0], [40.3, 186.0], [40.4, 186.0], [40.5, 187.0], [40.6, 187.0], [40.7, 187.0], [40.8, 188.0], [40.9, 188.0], [41.0, 188.0], [41.1, 189.0], [41.2, 189.0], [41.3, 190.0], [41.4, 190.0], [41.5, 190.0], [41.6, 191.0], [41.7, 191.0], [41.8, 191.0], [41.9, 192.0], [42.0, 192.0], [42.1, 192.0], [42.2, 193.0], [42.3, 193.0], [42.4, 193.0], [42.5, 194.0], [42.6, 194.0], [42.7, 194.0], [42.8, 195.0], [42.9, 195.0], [43.0, 196.0], [43.1, 196.0], [43.2, 196.0], [43.3, 197.0], [43.4, 197.0], [43.5, 197.0], [43.6, 198.0], [43.7, 198.0], [43.8, 199.0], [43.9, 199.0], [44.0, 199.0], [44.1, 200.0], [44.2, 200.0], [44.3, 200.0], [44.4, 201.0], [44.5, 201.0], [44.6, 201.0], [44.7, 202.0], [44.8, 202.0], [44.9, 202.0], [45.0, 203.0], [45.1, 203.0], [45.2, 203.0], [45.3, 204.0], [45.4, 204.0], [45.5, 204.0], [45.6, 205.0], [45.7, 205.0], [45.8, 206.0], [45.9, 206.0], [46.0, 206.0], [46.1, 206.0], [46.2, 207.0], [46.3, 207.0], [46.4, 207.0], [46.5, 208.0], [46.6, 208.0], [46.7, 208.0], [46.8, 209.0], [46.9, 209.0], [47.0, 209.0], [47.1, 209.0], [47.2, 210.0], [47.3, 210.0], [47.4, 211.0], [47.5, 211.0], [47.6, 211.0], [47.7, 212.0], [47.8, 212.0], [47.9, 212.0], [48.0, 213.0], [48.1, 213.0], [48.2, 213.0], [48.3, 213.0], [48.4, 214.0], [48.5, 214.0], [48.6, 214.0], [48.7, 215.0], [48.8, 215.0], [48.9, 215.0], [49.0, 216.0], [49.1, 216.0], [49.2, 216.0], [49.3, 217.0], [49.4, 217.0], [49.5, 217.0], [49.6, 218.0], [49.7, 218.0], [49.8, 218.0], [49.9, 219.0], [50.0, 219.0], [50.1, 219.0], [50.2, 220.0], [50.3, 220.0], [50.4, 220.0], [50.5, 221.0], [50.6, 221.0], [50.7, 221.0], [50.8, 222.0], [50.9, 222.0], [51.0, 223.0], [51.1, 223.0], [51.2, 223.0], [51.3, 224.0], [51.4, 224.0], [51.5, 224.0], [51.6, 225.0], [51.7, 225.0], [51.8, 225.0], [51.9, 225.0], [52.0, 226.0], [52.1, 226.0], [52.2, 226.0], [52.3, 227.0], [52.4, 227.0], [52.5, 227.0], [52.6, 228.0], [52.7, 228.0], [52.8, 228.0], [52.9, 228.0], [53.0, 229.0], [53.1, 229.0], [53.2, 229.0], [53.3, 230.0], [53.4, 230.0], [53.5, 231.0], [53.6, 231.0], [53.7, 231.0], [53.8, 231.0], [53.9, 232.0], [54.0, 232.0], [54.1, 232.0], [54.2, 233.0], [54.3, 233.0], [54.4, 233.0], [54.5, 233.0], [54.6, 234.0], [54.7, 234.0], [54.8, 234.0], [54.9, 234.0], [55.0, 235.0], [55.1, 235.0], [55.2, 235.0], [55.3, 236.0], [55.4, 236.0], [55.5, 236.0], [55.6, 236.0], [55.7, 237.0], [55.8, 237.0], [55.9, 237.0], [56.0, 238.0], [56.1, 238.0], [56.2, 238.0], [56.3, 239.0], [56.4, 239.0], [56.5, 239.0], [56.6, 239.0], [56.7, 240.0], [56.8, 240.0], [56.9, 240.0], [57.0, 241.0], [57.1, 241.0], [57.2, 241.0], [57.3, 241.0], [57.4, 242.0], [57.5, 242.0], [57.6, 242.0], [57.7, 242.0], [57.8, 243.0], [57.9, 243.0], [58.0, 243.0], [58.1, 243.0], [58.2, 244.0], [58.3, 244.0], [58.4, 244.0], [58.5, 244.0], [58.6, 245.0], [58.7, 245.0], [58.8, 245.0], [58.9, 245.0], [59.0, 246.0], [59.1, 246.0], [59.2, 246.0], [59.3, 246.0], [59.4, 247.0], [59.5, 247.0], [59.6, 247.0], [59.7, 247.0], [59.8, 248.0], [59.9, 248.0], [60.0, 248.0], [60.1, 249.0], [60.2, 249.0], [60.3, 249.0], [60.4, 249.0], [60.5, 250.0], [60.6, 250.0], [60.7, 250.0], [60.8, 251.0], [60.9, 251.0], [61.0, 251.0], [61.1, 251.0], [61.2, 252.0], [61.3, 252.0], [61.4, 252.0], [61.5, 252.0], [61.6, 252.0], [61.7, 253.0], [61.8, 253.0], [61.9, 253.0], [62.0, 253.0], [62.1, 254.0], [62.2, 254.0], [62.3, 254.0], [62.4, 254.0], [62.5, 255.0], [62.6, 255.0], [62.7, 255.0], [62.8, 255.0], [62.9, 256.0], [63.0, 256.0], [63.1, 256.0], [63.2, 256.0], [63.3, 256.0], [63.4, 257.0], [63.5, 257.0], [63.6, 257.0], [63.7, 257.0], [63.8, 258.0], [63.9, 258.0], [64.0, 258.0], [64.1, 258.0], [64.2, 259.0], [64.3, 259.0], [64.4, 259.0], [64.5, 260.0], [64.6, 260.0], [64.7, 260.0], [64.8, 260.0], [64.9, 260.0], [65.0, 261.0], [65.1, 261.0], [65.2, 261.0], [65.3, 261.0], [65.4, 261.0], [65.5, 262.0], [65.6, 262.0], [65.7, 262.0], [65.8, 262.0], [65.9, 263.0], [66.0, 263.0], [66.1, 263.0], [66.2, 263.0], [66.3, 264.0], [66.4, 264.0], [66.5, 264.0], [66.6, 264.0], [66.7, 265.0], [66.8, 265.0], [66.9, 265.0], [67.0, 265.0], [67.1, 265.0], [67.2, 266.0], [67.3, 266.0], [67.4, 266.0], [67.5, 266.0], [67.6, 267.0], [67.7, 267.0], [67.8, 267.0], [67.9, 267.0], [68.0, 268.0], [68.1, 268.0], [68.2, 268.0], [68.3, 268.0], [68.4, 268.0], [68.5, 269.0], [68.6, 269.0], [68.7, 269.0], [68.8, 269.0], [68.9, 270.0], [69.0, 270.0], [69.1, 270.0], [69.2, 271.0], [69.3, 271.0], [69.4, 271.0], [69.5, 271.0], [69.6, 271.0], [69.7, 272.0], [69.8, 272.0], [69.9, 272.0], [70.0, 272.0], [70.1, 273.0], [70.2, 273.0], [70.3, 273.0], [70.4, 273.0], [70.5, 274.0], [70.6, 274.0], [70.7, 274.0], [70.8, 274.0], [70.9, 274.0], [71.0, 275.0], [71.1, 275.0], [71.2, 275.0], [71.3, 275.0], [71.4, 275.0], [71.5, 276.0], [71.6, 276.0], [71.7, 276.0], [71.8, 276.0], [71.9, 277.0], [72.0, 277.0], [72.1, 277.0], [72.2, 277.0], [72.3, 278.0], [72.4, 278.0], [72.5, 278.0], [72.6, 278.0], [72.7, 278.0], [72.8, 279.0], [72.9, 279.0], [73.0, 279.0], [73.1, 279.0], [73.2, 279.0], [73.3, 280.0], [73.4, 280.0], [73.5, 280.0], [73.6, 280.0], [73.7, 281.0], [73.8, 281.0], [73.9, 281.0], [74.0, 281.0], [74.1, 282.0], [74.2, 282.0], [74.3, 282.0], [74.4, 282.0], [74.5, 282.0], [74.6, 283.0], [74.7, 283.0], [74.8, 283.0], [74.9, 283.0], [75.0, 284.0], [75.1, 284.0], [75.2, 284.0], [75.3, 284.0], [75.4, 285.0], [75.5, 285.0], [75.6, 285.0], [75.7, 285.0], [75.8, 286.0], [75.9, 286.0], [76.0, 286.0], [76.1, 286.0], [76.2, 287.0], [76.3, 287.0], [76.4, 287.0], [76.5, 287.0], [76.6, 287.0], [76.7, 288.0], [76.8, 288.0], [76.9, 288.0], [77.0, 288.0], [77.1, 288.0], [77.2, 289.0], [77.3, 289.0], [77.4, 289.0], [77.5, 289.0], [77.6, 290.0], [77.7, 290.0], [77.8, 290.0], [77.9, 290.0], [78.0, 291.0], [78.1, 291.0], [78.2, 291.0], [78.3, 291.0], [78.4, 292.0], [78.5, 292.0], [78.6, 292.0], [78.7, 292.0], [78.8, 293.0], [78.9, 293.0], [79.0, 293.0], [79.1, 293.0], [79.2, 294.0], [79.3, 294.0], [79.4, 294.0], [79.5, 295.0], [79.6, 295.0], [79.7, 295.0], [79.8, 295.0], [79.9, 296.0], [80.0, 296.0], [80.1, 296.0], [80.2, 296.0], [80.3, 297.0], [80.4, 297.0], [80.5, 297.0], [80.6, 297.0], [80.7, 298.0], [80.8, 298.0], [80.9, 298.0], [81.0, 298.0], [81.1, 299.0], [81.2, 299.0], [81.3, 299.0], [81.4, 299.0], [81.5, 299.0], [81.6, 300.0], [81.7, 300.0], [81.8, 300.0], [81.9, 301.0], [82.0, 301.0], [82.1, 301.0], [82.2, 301.0], [82.3, 301.0], [82.4, 302.0], [82.5, 302.0], [82.6, 302.0], [82.7, 302.0], [82.8, 303.0], [82.9, 303.0], [83.0, 303.0], [83.1, 303.0], [83.2, 304.0], [83.3, 304.0], [83.4, 304.0], [83.5, 305.0], [83.6, 305.0], [83.7, 305.0], [83.8, 306.0], [83.9, 306.0], [84.0, 306.0], [84.1, 307.0], [84.2, 307.0], [84.3, 307.0], [84.4, 307.0], [84.5, 308.0], [84.6, 308.0], [84.7, 308.0], [84.8, 309.0], [84.9, 309.0], [85.0, 309.0], [85.1, 310.0], [85.2, 310.0], [85.3, 310.0], [85.4, 311.0], [85.5, 311.0], [85.6, 311.0], [85.7, 311.0], [85.8, 312.0], [85.9, 312.0], [86.0, 312.0], [86.1, 313.0], [86.2, 313.0], [86.3, 313.0], [86.4, 313.0], [86.5, 314.0], [86.6, 314.0], [86.7, 315.0], [86.8, 315.0], [86.9, 315.0], [87.0, 316.0], [87.1, 316.0], [87.2, 317.0], [87.3, 317.0], [87.4, 317.0], [87.5, 318.0], [87.6, 318.0], [87.7, 319.0], [87.8, 319.0], [87.9, 319.0], [88.0, 319.0], [88.1, 320.0], [88.2, 320.0], [88.3, 320.0], [88.4, 321.0], [88.5, 321.0], [88.6, 322.0], [88.7, 322.0], [88.8, 322.0], [88.9, 323.0], [89.0, 323.0], [89.1, 323.0], [89.2, 324.0], [89.3, 324.0], [89.4, 325.0], [89.5, 325.0], [89.6, 326.0], [89.7, 326.0], [89.8, 326.0], [89.9, 327.0], [90.0, 327.0], [90.1, 328.0], [90.2, 328.0], [90.3, 329.0], [90.4, 329.0], [90.5, 329.0], [90.6, 330.0], [90.7, 330.0], [90.8, 331.0], [90.9, 331.0], [91.0, 331.0], [91.1, 332.0], [91.2, 332.0], [91.3, 333.0], [91.4, 333.0], [91.5, 333.0], [91.6, 334.0], [91.7, 334.0], [91.8, 335.0], [91.9, 336.0], [92.0, 336.0], [92.1, 337.0], [92.2, 337.0], [92.3, 338.0], [92.4, 338.0], [92.5, 339.0], [92.6, 339.0], [92.7, 339.0], [92.8, 340.0], [92.9, 340.0], [93.0, 341.0], [93.1, 342.0], [93.2, 342.0], [93.3, 343.0], [93.4, 343.0], [93.5, 344.0], [93.6, 344.0], [93.7, 345.0], [93.8, 345.0], [93.9, 346.0], [94.0, 347.0], [94.1, 347.0], [94.2, 348.0], [94.3, 349.0], [94.4, 349.0], [94.5, 350.0], [94.6, 351.0], [94.7, 352.0], [94.8, 353.0], [94.9, 354.0], [95.0, 354.0], [95.1, 355.0], [95.2, 355.0], [95.3, 356.0], [95.4, 357.0], [95.5, 359.0], [95.6, 359.0], [95.7, 360.0], [95.8, 361.0], [95.9, 363.0], [96.0, 363.0], [96.1, 364.0], [96.2, 365.0], [96.3, 366.0], [96.4, 367.0], [96.5, 368.0], [96.6, 370.0], [96.7, 372.0], [96.8, 373.0], [96.9, 374.0], [97.0, 376.0], [97.1, 377.0], [97.2, 378.0], [97.3, 380.0], [97.4, 381.0], [97.5, 382.0], [97.6, 384.0], [97.7, 386.0], [97.8, 387.0], [97.9, 389.0], [98.0, 392.0], [98.1, 394.0], [98.2, 395.0], [98.3, 397.0], [98.4, 399.0], [98.5, 402.0], [98.6, 404.0], [98.7, 406.0], [98.8, 409.0], [98.9, 412.0], [99.0, 415.0], [99.1, 419.0], [99.2, 422.0], [99.3, 427.0], [99.4, 432.0], [99.5, 437.0], [99.6, 442.0], [99.7, 449.0], [99.8, 457.0], [99.9, 470.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 8426.0, "series": [{"data": [[0.0, 5295.0], [300.0, 3805.0], [100.0, 4620.0], [200.0, 8426.0], [400.0, 352.0], [500.0, 6.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 22498.0, "series": [{"data": [[0.0, 22498.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.3624999999999994, "minX": 1.69852305E12, "maxY": 100.0, "series": [{"data": [[1.69852309E12, 100.0], [1.69852311E12, 96.8547963206308], [1.69852305E12, 2.3624999999999994], [1.69852307E12, 61.69672637430513], [1.698523085E12, 100.0], [1.698523105E12, 100.0], [1.698523065E12, 44.48358375069565], [1.69852308E12, 94.68277310924361], [1.6985231E12, 100.0], [1.69852306E12, 28.251904975347404], [1.698523095E12, 100.0], [1.698523055E12, 12.193607305936066], [1.698523075E12, 78.47389107243127]], "isOverall": false, "label": "MinimalMeet-dotnet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852311E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.153846153846153, "minX": 1.0, "maxY": 295.8720930232558, "series": [{"data": [[2.0, 13.508196721311474], [3.0, 9.153846153846153], [4.0, 11.26], [5.0, 15.234042553191495], [6.0, 14.68103448275862], [7.0, 21.40458015267175], [8.0, 18.853658536585368], [9.0, 24.235772357723572], [10.0, 21.977941176470598], [11.0, 22.07042253521126], [12.0, 30.462585034013596], [13.0, 28.52517985611511], [14.0, 28.46258503401361], [15.0, 31.768707482993204], [16.0, 37.19402985074627], [17.0, 32.6078431372549], [18.0, 35.083333333333314], [19.0, 42.199999999999996], [20.0, 42.348993288590634], [21.0, 39.90566037735852], [22.0, 50.48091603053434], [23.0, 55.66406250000001], [24.0, 56.623076923076916], [25.0, 72.06382978723406], [26.0, 60.54545454545453], [27.0, 56.934306569343065], [28.0, 61.96753246753247], [29.0, 60.689922480620154], [30.0, 59.69426751592358], [31.0, 97.5151515151515], [32.0, 83.90983606557376], [33.0, 75.8290598290598], [34.0, 81.95555555555556], [35.0, 77.78676470588233], [36.0, 78.58450704225348], [37.0, 70.60759493670886], [38.0, 79.17419354838711], [39.0, 87.18548387096773], [40.0, 106.06422018348619], [41.0, 109.49593495934961], [42.0, 125.95049504950494], [43.0, 116.03960396039605], [44.0, 147.64761904761906], [45.0, 137.02380952380952], [46.0, 142.83809523809526], [47.0, 151.26804123711338], [48.0, 164.96250000000012], [49.0, 138.3777777777778], [50.0, 156.65322580645156], [51.0, 144.7422680412371], [52.0, 149.61165048543688], [53.0, 147.03361344537822], [54.0, 157.87179487179492], [55.0, 154.00729927007302], [56.0, 154.6268656716418], [57.0, 219.0446428571429], [58.0, 166.29333333333335], [59.0, 183.74390243902445], [60.0, 241.94936708860757], [61.0, 198.17424242424235], [62.0, 150.4423076923077], [63.0, 151.39473684210526], [64.0, 173.71171171171164], [65.0, 200.99999999999997], [66.0, 224.05833333333337], [67.0, 295.8720930232558], [68.0, 214.94252873563224], [69.0, 188.18681318681323], [70.0, 232.43037974683543], [71.0, 208.53146853146856], [72.0, 182.57425742574264], [73.0, 201.4950495049505], [74.0, 241.00000000000017], [75.0, 195.5326086956522], [76.0, 200.3240740740741], [77.0, 195.74452554744533], [78.0, 206.79120879120882], [79.0, 242.35849056603763], [80.0, 229.61417322834637], [81.0, 220.31914893617022], [82.0, 214.18446601941747], [83.0, 228.16981132075472], [84.0, 202.10958904109603], [85.0, 283.3917525773197], [86.0, 182.5744680851064], [87.0, 248.28571428571425], [88.0, 220.31333333333342], [89.0, 239.94399999999996], [90.0, 237.8712871287129], [91.0, 276.1530612244899], [92.0, 198.39583333333343], [93.0, 246.9646017699114], [94.0, 242.6201550387597], [95.0, 215.05660377358492], [96.0, 251.5081967213116], [97.0, 236.01739130434777], [98.0, 290.45454545454555], [99.0, 239.5483870967742], [100.0, 271.58731864589015], [1.0, 19.272727272727273]], "isOverall": false, "label": "GET /meetings", "isController": false}, {"data": [[74.0929168147881, 201.04279239246333]], "isOverall": false, "label": "GET /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4864.0, "minX": 1.69852305E12, "maxY": 6.01580226E7, "series": [{"data": [[1.69852309E12, 5.04507666E7], [1.69852311E12, 4.10401212E7], [1.69852305E12, 4314336.0], [1.69852307E12, 4.36556874E7], [1.698523085E12, 5.23652532E7], [1.698523105E12, 4.4356767E7], [1.698523065E12, 4.84553862E7], [1.69852308E12, 5.13405984E7], [1.6985231E12, 5.19607842E7], [1.69852306E12, 6.01580226E7], [1.698523095E12, 5.1637209E7], [1.698523055E12, 5.9052474E7], [1.698523075E12, 4.80239526E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69852309E12, 56878.4], [1.69852311E12, 46268.8], [1.69852305E12, 4864.0], [1.69852307E12, 49217.6], [1.698523085E12, 59036.8], [1.698523105E12, 50008.0], [1.698523065E12, 54628.8], [1.69852308E12, 57881.6], [1.6985231E12, 58580.8], [1.69852306E12, 67822.4], [1.698523095E12, 58216.0], [1.698523055E12, 66576.0], [1.698523075E12, 54142.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852311E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8.96875, "minX": 1.69852305E12, "maxY": 299.9361702127661, "series": [{"data": [[1.69852309E12, 270.7140566541954], [1.69852311E12, 289.353482260184], [1.69852305E12, 8.96875], [1.69852307E12, 191.2970969734403], [1.698523085E12, 260.7425334706485], [1.698523105E12, 299.9361702127661], [1.698523065E12, 122.92264885920969], [1.69852308E12, 245.04884453781497], [1.6985231E12, 263.7322262584319], [1.69852306E12, 62.65262214253696], [1.698523095E12, 257.0605744125325], [1.698523055E12, 26.101369863013726], [1.698523075E12, 214.2476137001682]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852311E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7.287500000000001, "minX": 1.69852305E12, "maxY": 209.63586626139812, "series": [{"data": [[1.69852309E12, 197.88081239978658], [1.69852311E12, 186.89159001314044], [1.69852305E12, 7.287500000000001], [1.69852307E12, 130.247066090179], [1.698523085E12, 177.93099897013437], [1.698523105E12, 209.63586626139812], [1.698523065E12, 76.07568169170841], [1.69852308E12, 154.44327731092451], [1.6985231E12, 179.12247016087179], [1.69852306E12, 39.11116091438815], [1.698523095E12, 178.27728459530036], [1.698523055E12, 18.149771689497694], [1.698523075E12, 141.0892756878158]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852311E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1452263558942206, "minX": 1.69852305E12, "maxY": 1.6423319327731063, "series": [{"data": [[1.69852309E12, 1.4083377872795282], [1.69852311E12, 1.4684625492772676], [1.69852305E12, 1.2312499999999997], [1.69852307E12, 1.524397776405188], [1.698523085E12, 1.4552008238928964], [1.698523105E12, 1.4881458966565329], [1.698523065E12, 1.4112409571508073], [1.69852308E12, 1.6423319327731063], [1.6985231E12, 1.413077322262582], [1.69852306E12, 1.1452263558942206], [1.698523095E12, 1.4590078328981693], [1.698523055E12, 1.2054794520547965], [1.698523075E12, 1.4373947220662524]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852311E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.69852305E12, "maxY": 566.0, "series": [{"data": [[1.69852309E12, 462.0], [1.69852311E12, 566.0], [1.69852305E12, 19.0], [1.69852307E12, 402.0], [1.698523085E12, 495.0], [1.698523105E12, 498.0], [1.698523065E12, 263.0], [1.69852308E12, 437.0], [1.6985231E12, 474.0], [1.69852306E12, 146.0], [1.698523095E12, 460.0], [1.698523055E12, 70.0], [1.698523075E12, 445.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69852309E12, 60.0], [1.69852311E12, 55.0], [1.69852305E12, 6.0], [1.69852307E12, 45.0], [1.698523085E12, 62.0], [1.698523105E12, 75.0], [1.698523065E12, 40.0], [1.69852308E12, 45.0], [1.6985231E12, 46.0], [1.69852306E12, 22.0], [1.698523095E12, 49.0], [1.698523055E12, 7.0], [1.698523075E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69852309E12, 350.0], [1.69852311E12, 388.70000000000005], [1.69852305E12, 10.0], [1.69852307E12, 271.0], [1.698523085E12, 337.0], [1.698523105E12, 373.0], [1.698523065E12, 177.0], [1.69852308E12, 308.0], [1.6985231E12, 346.0], [1.69852306E12, 88.0], [1.698523095E12, 330.0], [1.698523055E12, 40.0], [1.698523075E12, 282.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69852309E12, 411.0], [1.69852311E12, 468.0], [1.69852305E12, 17.16999999999996], [1.69852307E12, 363.39999999999986], [1.698523085E12, 403.0], [1.698523105E12, 443.53999999999996], [1.698523065E12, 227.01999999999998], [1.69852308E12, 380.9000000000001], [1.6985231E12, 436.72], [1.69852306E12, 126.0], [1.698523095E12, 405.67999999999984], [1.698523055E12, 55.0], [1.698523075E12, 345.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69852309E12, 272.0], [1.69852311E12, 293.0], [1.69852305E12, 9.0], [1.69852307E12, 190.0], [1.698523085E12, 268.0], [1.698523105E12, 307.0], [1.698523065E12, 119.0], [1.69852308E12, 253.0], [1.6985231E12, 268.0], [1.69852306E12, 60.0], [1.698523095E12, 262.0], [1.698523055E12, 25.0], [1.698523075E12, 214.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69852309E12, 367.0], [1.69852311E12, 422.8499999999999], [1.69852305E12, 12.0], [1.69852307E12, 296.0], [1.698523085E12, 356.8499999999999], [1.698523105E12, 395.6999999999998], [1.698523065E12, 191.0999999999999], [1.69852308E12, 327.75], [1.6985231E12, 381.5999999999999], [1.69852306E12, 97.0], [1.698523095E12, 361.1999999999998], [1.698523055E12, 44.0], [1.698523075E12, 307.89999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852311E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 138.0, "maxY": 329.0, "series": [{"data": [[138.0, 291.5], [160.0, 9.0], [287.0, 319.0], [301.0, 329.0], [314.0, 146.0], [315.0, 184.5], [311.0, 197.0], [304.0, 195.0], [319.0, 326.0], [326.0, 162.0], [322.0, 233.0], [334.0, 215.5], [327.0, 318.0], [333.0, 286.0], [350.0, 47.5], [339.0, 205.0], [343.0, 283.5], [345.0, 281.0], [366.0, 200.5], [356.0, 172.0], [365.0, 219.0], [352.0, 271.5], [362.0, 258.0], [355.0, 287.0], [364.0, 264.5], [363.0, 300.0], [377.0, 214.0], [375.0, 236.0], [382.0, 253.0], [379.0, 262.0], [376.0, 289.0], [378.0, 281.0], [396.0, 259.0], [391.0, 253.0], [387.0, 261.0], [386.0, 275.0], [384.0, 275.0], [397.0, 284.0], [406.0, 77.0], [402.0, 271.0], [404.0, 260.5], [409.0, 247.0], [413.0, 265.0], [418.0, 19.0], [416.0, 252.0], [427.0, 272.0], [436.0, 56.0], [445.0, 78.0], [432.0, 261.5], [452.0, 80.0], [472.0, 23.0], [466.0, 31.0], [468.0, 45.0], [476.0, 58.5], [484.0, 36.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7.0, "minX": 138.0, "maxY": 312.0, "series": [{"data": [[138.0, 182.0], [160.0, 7.0], [287.0, 200.0], [301.0, 312.0], [314.0, 87.5], [315.0, 122.0], [311.0, 123.0], [304.0, 149.5], [319.0, 247.0], [326.0, 108.5], [322.0, 136.0], [334.0, 136.0], [327.0, 302.0], [333.0, 175.0], [350.0, 30.0], [339.0, 131.0], [343.0, 191.5], [345.0, 178.0], [366.0, 117.0], [356.0, 118.5], [365.0, 151.0], [352.0, 167.0], [362.0, 167.0], [355.0, 221.0], [364.0, 164.0], [363.0, 180.0], [377.0, 133.0], [375.0, 146.0], [382.0, 144.0], [379.0, 161.5], [376.0, 233.0], [378.0, 179.5], [396.0, 160.5], [391.0, 174.0], [387.0, 164.0], [386.0, 173.0], [384.0, 197.0], [397.0, 179.0], [406.0, 44.0], [402.0, 189.0], [404.0, 182.5], [409.0, 173.0], [413.0, 185.0], [418.0, 14.0], [416.0, 155.0], [427.0, 164.0], [436.0, 34.0], [445.0, 46.0], [432.0, 169.0], [452.0, 50.0], [472.0, 17.0], [466.0, 20.0], [468.0, 29.0], [476.0, 36.0], [484.0, 24.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 32.4, "minX": 1.69852305E12, "maxY": 449.6, "series": [{"data": [[1.69852309E12, 374.2], [1.69852311E12, 284.4], [1.69852305E12, 32.4], [1.69852307E12, 327.0], [1.698523085E12, 388.4], [1.698523105E12, 329.0], [1.698523065E12, 362.6], [1.69852308E12, 383.4], [1.6985231E12, 385.8], [1.69852306E12, 449.6], [1.698523095E12, 382.6], [1.698523055E12, 441.6], [1.698523075E12, 359.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852311E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.69852305E12, "maxY": 446.2, "series": [{"data": [[1.69852309E12, 374.2], [1.69852311E12, 304.4], [1.69852305E12, 32.0], [1.69852307E12, 323.8], [1.698523085E12, 388.4], [1.698523105E12, 329.0], [1.698523065E12, 359.4], [1.69852308E12, 380.8], [1.6985231E12, 385.4], [1.69852306E12, 446.2], [1.698523095E12, 383.0], [1.698523055E12, 438.0], [1.698523075E12, 356.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852311E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.69852305E12, "maxY": 446.2, "series": [{"data": [[1.69852309E12, 374.2], [1.69852311E12, 304.4], [1.69852305E12, 32.0], [1.69852307E12, 323.8], [1.698523085E12, 388.4], [1.698523105E12, 329.0], [1.698523065E12, 359.4], [1.69852308E12, 380.8], [1.6985231E12, 385.4], [1.69852306E12, 446.2], [1.698523095E12, 383.0], [1.698523055E12, 438.0], [1.698523075E12, 356.2]], "isOverall": false, "label": "GET /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852311E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.69852305E12, "maxY": 446.2, "series": [{"data": [[1.69852309E12, 374.2], [1.69852311E12, 304.4], [1.69852305E12, 32.0], [1.69852307E12, 323.8], [1.698523085E12, 388.4], [1.698523105E12, 329.0], [1.698523065E12, 359.4], [1.69852308E12, 380.8], [1.6985231E12, 385.4], [1.69852306E12, 446.2], [1.698523095E12, 383.0], [1.698523055E12, 438.0], [1.698523075E12, 356.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852311E12, "title": "Total Transactions Per Second"}},
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

