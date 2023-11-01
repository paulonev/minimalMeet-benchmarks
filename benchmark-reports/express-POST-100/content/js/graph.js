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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 330.0, "series": [{"data": [[0.0, 6.0], [0.1, 7.0], [0.2, 7.0], [0.3, 8.0], [0.4, 8.0], [0.5, 8.0], [0.6, 9.0], [0.7, 9.0], [0.8, 9.0], [0.9, 9.0], [1.0, 9.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 10.0], [1.8, 11.0], [1.9, 11.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 12.0], [2.8, 12.0], [2.9, 12.0], [3.0, 12.0], [3.1, 12.0], [3.2, 12.0], [3.3, 12.0], [3.4, 12.0], [3.5, 12.0], [3.6, 13.0], [3.7, 13.0], [3.8, 13.0], [3.9, 13.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 14.0], [4.6, 14.0], [4.7, 14.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 17.0], [7.0, 17.0], [7.1, 17.0], [7.2, 17.0], [7.3, 17.0], [7.4, 18.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 19.0], [8.0, 19.0], [8.1, 19.0], [8.2, 19.0], [8.3, 19.0], [8.4, 20.0], [8.5, 20.0], [8.6, 20.0], [8.7, 20.0], [8.8, 21.0], [8.9, 21.0], [9.0, 21.0], [9.1, 21.0], [9.2, 22.0], [9.3, 22.0], [9.4, 22.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 24.0], [9.9, 24.0], [10.0, 24.0], [10.1, 25.0], [10.2, 25.0], [10.3, 25.0], [10.4, 26.0], [10.5, 26.0], [10.6, 26.0], [10.7, 27.0], [10.8, 27.0], [10.9, 27.0], [11.0, 28.0], [11.1, 28.0], [11.2, 28.0], [11.3, 29.0], [11.4, 29.0], [11.5, 30.0], [11.6, 30.0], [11.7, 30.0], [11.8, 31.0], [11.9, 31.0], [12.0, 31.0], [12.1, 32.0], [12.2, 32.0], [12.3, 33.0], [12.4, 33.0], [12.5, 33.0], [12.6, 34.0], [12.7, 34.0], [12.8, 34.0], [12.9, 34.0], [13.0, 34.0], [13.1, 35.0], [13.2, 35.0], [13.3, 35.0], [13.4, 35.0], [13.5, 36.0], [13.6, 36.0], [13.7, 36.0], [13.8, 36.0], [13.9, 36.0], [14.0, 37.0], [14.1, 37.0], [14.2, 37.0], [14.3, 37.0], [14.4, 37.0], [14.5, 37.0], [14.6, 38.0], [14.7, 38.0], [14.8, 38.0], [14.9, 38.0], [15.0, 38.0], [15.1, 38.0], [15.2, 38.0], [15.3, 39.0], [15.4, 39.0], [15.5, 39.0], [15.6, 39.0], [15.7, 39.0], [15.8, 39.0], [15.9, 40.0], [16.0, 40.0], [16.1, 40.0], [16.2, 40.0], [16.3, 40.0], [16.4, 40.0], [16.5, 40.0], [16.6, 41.0], [16.7, 41.0], [16.8, 41.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 42.0], [17.8, 42.0], [17.9, 42.0], [18.0, 42.0], [18.1, 43.0], [18.2, 43.0], [18.3, 43.0], [18.4, 43.0], [18.5, 43.0], [18.6, 43.0], [18.7, 43.0], [18.8, 43.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 44.0], [19.5, 44.0], [19.6, 45.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 45.0], [20.2, 46.0], [20.3, 46.0], [20.4, 46.0], [20.5, 46.0], [20.6, 46.0], [20.7, 46.0], [20.8, 46.0], [20.9, 47.0], [21.0, 47.0], [21.1, 47.0], [21.2, 47.0], [21.3, 47.0], [21.4, 48.0], [21.5, 48.0], [21.6, 48.0], [21.7, 48.0], [21.8, 48.0], [21.9, 48.0], [22.0, 49.0], [22.1, 49.0], [22.2, 49.0], [22.3, 49.0], [22.4, 49.0], [22.5, 49.0], [22.6, 50.0], [22.7, 50.0], [22.8, 50.0], [22.9, 50.0], [23.0, 50.0], [23.1, 50.0], [23.2, 51.0], [23.3, 51.0], [23.4, 51.0], [23.5, 51.0], [23.6, 51.0], [23.7, 52.0], [23.8, 52.0], [23.9, 52.0], [24.0, 52.0], [24.1, 52.0], [24.2, 52.0], [24.3, 52.0], [24.4, 53.0], [24.5, 53.0], [24.6, 53.0], [24.7, 53.0], [24.8, 53.0], [24.9, 54.0], [25.0, 54.0], [25.1, 54.0], [25.2, 54.0], [25.3, 54.0], [25.4, 55.0], [25.5, 55.0], [25.6, 55.0], [25.7, 55.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 57.0], [26.4, 57.0], [26.5, 57.0], [26.6, 57.0], [26.7, 58.0], [26.8, 58.0], [26.9, 58.0], [27.0, 58.0], [27.1, 59.0], [27.2, 59.0], [27.3, 59.0], [27.4, 59.0], [27.5, 60.0], [27.6, 60.0], [27.7, 60.0], [27.8, 61.0], [27.9, 61.0], [28.0, 61.0], [28.1, 61.0], [28.2, 62.0], [28.3, 62.0], [28.4, 62.0], [28.5, 62.0], [28.6, 63.0], [28.7, 63.0], [28.8, 63.0], [28.9, 64.0], [29.0, 64.0], [29.1, 64.0], [29.2, 64.0], [29.3, 65.0], [29.4, 65.0], [29.5, 65.0], [29.6, 65.0], [29.7, 66.0], [29.8, 66.0], [29.9, 66.0], [30.0, 66.0], [30.1, 66.0], [30.2, 67.0], [30.3, 67.0], [30.4, 67.0], [30.5, 67.0], [30.6, 67.0], [30.7, 68.0], [30.8, 68.0], [30.9, 68.0], [31.0, 68.0], [31.1, 68.0], [31.2, 69.0], [31.3, 69.0], [31.4, 69.0], [31.5, 69.0], [31.6, 69.0], [31.7, 69.0], [31.8, 69.0], [31.9, 70.0], [32.0, 70.0], [32.1, 70.0], [32.2, 70.0], [32.3, 70.0], [32.4, 70.0], [32.5, 71.0], [32.6, 71.0], [32.7, 71.0], [32.8, 71.0], [32.9, 71.0], [33.0, 71.0], [33.1, 71.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 72.0], [33.6, 72.0], [33.7, 72.0], [33.8, 73.0], [33.9, 73.0], [34.0, 73.0], [34.1, 73.0], [34.2, 73.0], [34.3, 73.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 74.0], [34.8, 74.0], [34.9, 75.0], [35.0, 75.0], [35.1, 75.0], [35.2, 75.0], [35.3, 75.0], [35.4, 75.0], [35.5, 76.0], [35.6, 76.0], [35.7, 76.0], [35.8, 76.0], [35.9, 77.0], [36.0, 77.0], [36.1, 77.0], [36.2, 77.0], [36.3, 77.0], [36.4, 78.0], [36.5, 78.0], [36.6, 78.0], [36.7, 78.0], [36.8, 78.0], [36.9, 79.0], [37.0, 79.0], [37.1, 79.0], [37.2, 79.0], [37.3, 79.0], [37.4, 80.0], [37.5, 80.0], [37.6, 80.0], [37.7, 81.0], [37.8, 81.0], [37.9, 81.0], [38.0, 81.0], [38.1, 82.0], [38.2, 82.0], [38.3, 83.0], [38.4, 83.0], [38.5, 83.0], [38.6, 84.0], [38.7, 84.0], [38.8, 84.0], [38.9, 85.0], [39.0, 85.0], [39.1, 86.0], [39.2, 86.0], [39.3, 87.0], [39.4, 87.0], [39.5, 88.0], [39.6, 88.0], [39.7, 89.0], [39.8, 89.0], [39.9, 90.0], [40.0, 90.0], [40.1, 91.0], [40.2, 91.0], [40.3, 91.0], [40.4, 92.0], [40.5, 92.0], [40.6, 92.0], [40.7, 93.0], [40.8, 93.0], [40.9, 94.0], [41.0, 94.0], [41.1, 95.0], [41.2, 95.0], [41.3, 95.0], [41.4, 96.0], [41.5, 96.0], [41.6, 97.0], [41.7, 97.0], [41.8, 97.0], [41.9, 98.0], [42.0, 98.0], [42.1, 98.0], [42.2, 99.0], [42.3, 99.0], [42.4, 99.0], [42.5, 100.0], [42.6, 100.0], [42.7, 100.0], [42.8, 100.0], [42.9, 100.0], [43.0, 101.0], [43.1, 101.0], [43.2, 101.0], [43.3, 101.0], [43.4, 102.0], [43.5, 102.0], [43.6, 102.0], [43.7, 102.0], [43.8, 102.0], [43.9, 102.0], [44.0, 102.0], [44.1, 103.0], [44.2, 103.0], [44.3, 103.0], [44.4, 103.0], [44.5, 103.0], [44.6, 103.0], [44.7, 103.0], [44.8, 103.0], [44.9, 104.0], [45.0, 104.0], [45.1, 104.0], [45.2, 104.0], [45.3, 104.0], [45.4, 104.0], [45.5, 104.0], [45.6, 104.0], [45.7, 104.0], [45.8, 104.0], [45.9, 105.0], [46.0, 105.0], [46.1, 105.0], [46.2, 105.0], [46.3, 105.0], [46.4, 105.0], [46.5, 105.0], [46.6, 105.0], [46.7, 105.0], [46.8, 105.0], [46.9, 105.0], [47.0, 105.0], [47.1, 106.0], [47.2, 106.0], [47.3, 106.0], [47.4, 106.0], [47.5, 106.0], [47.6, 106.0], [47.7, 106.0], [47.8, 106.0], [47.9, 106.0], [48.0, 106.0], [48.1, 106.0], [48.2, 106.0], [48.3, 106.0], [48.4, 106.0], [48.5, 107.0], [48.6, 107.0], [48.7, 107.0], [48.8, 107.0], [48.9, 107.0], [49.0, 107.0], [49.1, 107.0], [49.2, 107.0], [49.3, 107.0], [49.4, 107.0], [49.5, 107.0], [49.6, 107.0], [49.7, 107.0], [49.8, 107.0], [49.9, 107.0], [50.0, 108.0], [50.1, 108.0], [50.2, 108.0], [50.3, 108.0], [50.4, 108.0], [50.5, 108.0], [50.6, 108.0], [50.7, 108.0], [50.8, 108.0], [50.9, 108.0], [51.0, 108.0], [51.1, 108.0], [51.2, 108.0], [51.3, 108.0], [51.4, 108.0], [51.5, 108.0], [51.6, 108.0], [51.7, 108.0], [51.8, 109.0], [51.9, 109.0], [52.0, 109.0], [52.1, 109.0], [52.2, 109.0], [52.3, 109.0], [52.4, 109.0], [52.5, 109.0], [52.6, 109.0], [52.7, 109.0], [52.8, 109.0], [52.9, 109.0], [53.0, 109.0], [53.1, 109.0], [53.2, 109.0], [53.3, 109.0], [53.4, 109.0], [53.5, 109.0], [53.6, 109.0], [53.7, 110.0], [53.8, 110.0], [53.9, 110.0], [54.0, 110.0], [54.1, 110.0], [54.2, 110.0], [54.3, 110.0], [54.4, 110.0], [54.5, 110.0], [54.6, 110.0], [54.7, 110.0], [54.8, 110.0], [54.9, 110.0], [55.0, 110.0], [55.1, 110.0], [55.2, 110.0], [55.3, 110.0], [55.4, 110.0], [55.5, 110.0], [55.6, 110.0], [55.7, 110.0], [55.8, 110.0], [55.9, 111.0], [56.0, 111.0], [56.1, 111.0], [56.2, 111.0], [56.3, 111.0], [56.4, 111.0], [56.5, 111.0], [56.6, 111.0], [56.7, 111.0], [56.8, 111.0], [56.9, 111.0], [57.0, 111.0], [57.1, 111.0], [57.2, 111.0], [57.3, 111.0], [57.4, 111.0], [57.5, 111.0], [57.6, 111.0], [57.7, 111.0], [57.8, 111.0], [57.9, 112.0], [58.0, 112.0], [58.1, 112.0], [58.2, 112.0], [58.3, 112.0], [58.4, 112.0], [58.5, 112.0], [58.6, 112.0], [58.7, 112.0], [58.8, 112.0], [58.9, 112.0], [59.0, 112.0], [59.1, 112.0], [59.2, 112.0], [59.3, 112.0], [59.4, 112.0], [59.5, 112.0], [59.6, 112.0], [59.7, 112.0], [59.8, 112.0], [59.9, 112.0], [60.0, 112.0], [60.1, 113.0], [60.2, 113.0], [60.3, 113.0], [60.4, 113.0], [60.5, 113.0], [60.6, 113.0], [60.7, 113.0], [60.8, 113.0], [60.9, 113.0], [61.0, 113.0], [61.1, 113.0], [61.2, 113.0], [61.3, 113.0], [61.4, 113.0], [61.5, 113.0], [61.6, 113.0], [61.7, 113.0], [61.8, 113.0], [61.9, 113.0], [62.0, 113.0], [62.1, 114.0], [62.2, 114.0], [62.3, 114.0], [62.4, 114.0], [62.5, 114.0], [62.6, 114.0], [62.7, 114.0], [62.8, 114.0], [62.9, 114.0], [63.0, 114.0], [63.1, 114.0], [63.2, 114.0], [63.3, 114.0], [63.4, 114.0], [63.5, 114.0], [63.6, 114.0], [63.7, 114.0], [63.8, 114.0], [63.9, 114.0], [64.0, 114.0], [64.1, 115.0], [64.2, 115.0], [64.3, 115.0], [64.4, 115.0], [64.5, 115.0], [64.6, 115.0], [64.7, 115.0], [64.8, 115.0], [64.9, 115.0], [65.0, 115.0], [65.1, 115.0], [65.2, 115.0], [65.3, 115.0], [65.4, 115.0], [65.5, 115.0], [65.6, 115.0], [65.7, 115.0], [65.8, 115.0], [65.9, 115.0], [66.0, 115.0], [66.1, 116.0], [66.2, 116.0], [66.3, 116.0], [66.4, 116.0], [66.5, 116.0], [66.6, 116.0], [66.7, 116.0], [66.8, 116.0], [66.9, 116.0], [67.0, 116.0], [67.1, 116.0], [67.2, 116.0], [67.3, 116.0], [67.4, 116.0], [67.5, 116.0], [67.6, 116.0], [67.7, 116.0], [67.8, 116.0], [67.9, 116.0], [68.0, 116.0], [68.1, 116.0], [68.2, 117.0], [68.3, 117.0], [68.4, 117.0], [68.5, 117.0], [68.6, 117.0], [68.7, 117.0], [68.8, 117.0], [68.9, 117.0], [69.0, 117.0], [69.1, 117.0], [69.2, 117.0], [69.3, 117.0], [69.4, 117.0], [69.5, 117.0], [69.6, 117.0], [69.7, 117.0], [69.8, 117.0], [69.9, 117.0], [70.0, 117.0], [70.1, 117.0], [70.2, 117.0], [70.3, 118.0], [70.4, 118.0], [70.5, 118.0], [70.6, 118.0], [70.7, 118.0], [70.8, 118.0], [70.9, 118.0], [71.0, 118.0], [71.1, 118.0], [71.2, 118.0], [71.3, 118.0], [71.4, 118.0], [71.5, 118.0], [71.6, 118.0], [71.7, 118.0], [71.8, 118.0], [71.9, 118.0], [72.0, 118.0], [72.1, 118.0], [72.2, 118.0], [72.3, 118.0], [72.4, 119.0], [72.5, 119.0], [72.6, 119.0], [72.7, 119.0], [72.8, 119.0], [72.9, 119.0], [73.0, 119.0], [73.1, 119.0], [73.2, 119.0], [73.3, 119.0], [73.4, 119.0], [73.5, 119.0], [73.6, 119.0], [73.7, 119.0], [73.8, 119.0], [73.9, 119.0], [74.0, 119.0], [74.1, 119.0], [74.2, 119.0], [74.3, 119.0], [74.4, 120.0], [74.5, 120.0], [74.6, 120.0], [74.7, 120.0], [74.8, 120.0], [74.9, 120.0], [75.0, 120.0], [75.1, 120.0], [75.2, 120.0], [75.3, 120.0], [75.4, 120.0], [75.5, 120.0], [75.6, 120.0], [75.7, 120.0], [75.8, 120.0], [75.9, 120.0], [76.0, 120.0], [76.1, 121.0], [76.2, 121.0], [76.3, 121.0], [76.4, 121.0], [76.5, 121.0], [76.6, 121.0], [76.7, 121.0], [76.8, 121.0], [76.9, 121.0], [77.0, 121.0], [77.1, 121.0], [77.2, 121.0], [77.3, 121.0], [77.4, 121.0], [77.5, 121.0], [77.6, 122.0], [77.7, 122.0], [77.8, 122.0], [77.9, 122.0], [78.0, 122.0], [78.1, 122.0], [78.2, 122.0], [78.3, 122.0], [78.4, 122.0], [78.5, 122.0], [78.6, 122.0], [78.7, 122.0], [78.8, 122.0], [78.9, 122.0], [79.0, 123.0], [79.1, 123.0], [79.2, 123.0], [79.3, 123.0], [79.4, 123.0], [79.5, 123.0], [79.6, 123.0], [79.7, 123.0], [79.8, 123.0], [79.9, 123.0], [80.0, 123.0], [80.1, 124.0], [80.2, 124.0], [80.3, 124.0], [80.4, 124.0], [80.5, 124.0], [80.6, 124.0], [80.7, 124.0], [80.8, 124.0], [80.9, 124.0], [81.0, 124.0], [81.1, 125.0], [81.2, 125.0], [81.3, 125.0], [81.4, 125.0], [81.5, 125.0], [81.6, 125.0], [81.7, 125.0], [81.8, 125.0], [81.9, 125.0], [82.0, 126.0], [82.1, 126.0], [82.2, 126.0], [82.3, 126.0], [82.4, 126.0], [82.5, 126.0], [82.6, 126.0], [82.7, 126.0], [82.8, 126.0], [82.9, 127.0], [83.0, 127.0], [83.1, 127.0], [83.2, 127.0], [83.3, 127.0], [83.4, 127.0], [83.5, 127.0], [83.6, 127.0], [83.7, 128.0], [83.8, 128.0], [83.9, 128.0], [84.0, 128.0], [84.1, 128.0], [84.2, 128.0], [84.3, 128.0], [84.4, 128.0], [84.5, 129.0], [84.6, 129.0], [84.7, 129.0], [84.8, 129.0], [84.9, 129.0], [85.0, 129.0], [85.1, 129.0], [85.2, 130.0], [85.3, 130.0], [85.4, 130.0], [85.5, 130.0], [85.6, 130.0], [85.7, 130.0], [85.8, 130.0], [85.9, 131.0], [86.0, 131.0], [86.1, 131.0], [86.2, 131.0], [86.3, 131.0], [86.4, 131.0], [86.5, 131.0], [86.6, 132.0], [86.7, 132.0], [86.8, 132.0], [86.9, 132.0], [87.0, 132.0], [87.1, 132.0], [87.2, 133.0], [87.3, 133.0], [87.4, 133.0], [87.5, 133.0], [87.6, 133.0], [87.7, 134.0], [87.8, 134.0], [87.9, 134.0], [88.0, 134.0], [88.1, 135.0], [88.2, 135.0], [88.3, 135.0], [88.4, 135.0], [88.5, 135.0], [88.6, 136.0], [88.7, 136.0], [88.8, 136.0], [88.9, 136.0], [89.0, 137.0], [89.1, 137.0], [89.2, 137.0], [89.3, 138.0], [89.4, 138.0], [89.5, 139.0], [89.6, 139.0], [89.7, 139.0], [89.8, 140.0], [89.9, 140.0], [90.0, 141.0], [90.1, 141.0], [90.2, 142.0], [90.3, 142.0], [90.4, 142.0], [90.5, 143.0], [90.6, 144.0], [90.7, 144.0], [90.8, 144.0], [90.9, 145.0], [91.0, 145.0], [91.1, 146.0], [91.2, 146.0], [91.3, 147.0], [91.4, 147.0], [91.5, 148.0], [91.6, 149.0], [91.7, 149.0], [91.8, 150.0], [91.9, 151.0], [92.0, 152.0], [92.1, 152.0], [92.2, 154.0], [92.3, 154.0], [92.4, 155.0], [92.5, 156.0], [92.6, 157.0], [92.7, 158.0], [92.8, 158.0], [92.9, 159.0], [93.0, 160.0], [93.1, 161.0], [93.2, 161.0], [93.3, 163.0], [93.4, 164.0], [93.5, 165.0], [93.6, 166.0], [93.7, 167.0], [93.8, 168.0], [93.9, 168.0], [94.0, 169.0], [94.1, 170.0], [94.2, 170.0], [94.3, 171.0], [94.4, 172.0], [94.5, 172.0], [94.6, 173.0], [94.7, 174.0], [94.8, 175.0], [94.9, 176.0], [95.0, 177.0], [95.1, 179.0], [95.2, 180.0], [95.3, 181.0], [95.4, 182.0], [95.5, 183.0], [95.6, 184.0], [95.7, 185.0], [95.8, 186.0], [95.9, 187.0], [96.0, 188.0], [96.1, 189.0], [96.2, 190.0], [96.3, 191.0], [96.4, 193.0], [96.5, 194.0], [96.6, 196.0], [96.7, 197.0], [96.8, 199.0], [96.9, 200.0], [97.0, 201.0], [97.1, 203.0], [97.2, 204.0], [97.3, 205.0], [97.4, 207.0], [97.5, 208.0], [97.6, 211.0], [97.7, 212.0], [97.8, 214.0], [97.9, 216.0], [98.0, 219.0], [98.1, 222.0], [98.2, 226.0], [98.3, 228.0], [98.4, 230.0], [98.5, 231.0], [98.6, 233.0], [98.7, 236.0], [98.8, 237.0], [98.9, 239.0], [99.0, 241.0], [99.1, 243.0], [99.2, 245.0], [99.3, 250.0], [99.4, 259.0], [99.5, 267.0], [99.6, 272.0], [99.7, 278.0], [99.8, 284.0], [99.9, 294.0]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 24.0, "minX": 0.0, "maxY": 25941.0, "series": [{"data": [[0.0, 20261.0], [300.0, 24.0], [100.0, 25941.0], [200.0, 1470.0]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 47696.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 47696.0, "series": [{"data": [[0.0, 47696.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6981132075471699, "minX": 1.69852719E12, "maxY": 100.0, "series": [{"data": [[1.698527215E12, 78.33752285191939], [1.698527235E12, 100.0], [1.69852719E12, 1.6981132075471699], [1.6985272E12, 26.213808463251628], [1.69852722E12, 92.71871127633221], [1.69852724E12, 100.0], [1.698527195E12, 11.770086862106412], [1.698527205E12, 43.58623874393899], [1.698527225E12, 100.0], [1.698527245E12, 100.0], [1.69852721E12, 59.98725534820208], [1.69852723E12, 100.0], [1.69852725E12, 98.77805737292393]], "isOverall": false, "label": "MinimalMeet-express", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852725E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8.375000000000002, "minX": 1.0, "maxY": 235.22142857142867, "series": [{"data": [[2.0, 10.157894736842106], [3.0, 10.15853658536585], [4.0, 11.577586206896552], [5.0, 9.167741935483868], [6.0, 11.478787878787884], [7.0, 11.700564971751414], [8.0, 10.75925925925926], [9.0, 11.13924050632911], [10.0, 13.080717488789237], [11.0, 13.19047619047619], [12.0, 15.078358208955217], [13.0, 13.39864864864865], [14.0, 13.710097719869696], [15.0, 15.464150943396222], [16.0, 21.232931726907616], [17.0, 18.155797101449284], [18.0, 16.886075949367093], [19.0, 19.699646643109542], [20.0, 20.790035587188623], [21.0, 22.498360655737695], [22.0, 22.74226804123712], [23.0, 34.58152173913044], [24.0, 52.90579710144928], [25.0, 43.70879120879119], [26.0, 26.55775577557756], [27.0, 30.56692913385827], [28.0, 33.88211382113821], [29.0, 45.45408163265305], [30.0, 77.98969072164945], [31.0, 52.6255924170616], [32.0, 35.659003831417586], [33.0, 41.392405063291164], [34.0, 84.26923076923079], [35.0, 95.67187500000004], [36.0, 62.92899408284016], [37.0, 39.272084805653705], [38.0, 46.14682539682539], [39.0, 39.348684210526315], [40.0, 42.47252747252745], [41.0, 40.09206349206352], [42.0, 43.548872180451134], [43.0, 120.11538461538463], [44.0, 45.95665634674922], [45.0, 39.90718562874256], [46.0, 42.215384615384636], [47.0, 44.35126582278484], [48.0, 46.05846153846153], [49.0, 43.45029239766081], [50.0, 67.68229166666666], [51.0, 116.27007299270073], [52.0, 114.72093023255817], [53.0, 110.13475177304962], [54.0, 72.52777777777779], [55.0, 51.723404255319174], [56.0, 49.362831858407056], [57.0, 53.79559748427673], [58.0, 50.73198847262248], [59.0, 53.09939759036143], [60.0, 55.3250773993808], [61.0, 62.19112627986352], [62.0, 60.535483870967745], [63.0, 61.2671009771987], [64.0, 61.12052117263843], [65.0, 95.0747126436782], [66.0, 141.954248366013], [67.0, 95.39999999999999], [68.0, 113.33928571428574], [69.0, 157.06299212598427], [70.0, 151.21768707482997], [71.0, 133.16176470588232], [72.0, 187.83593750000003], [73.0, 180.52554744525548], [74.0, 92.45783132530119], [75.0, 69.4984802431612], [76.0, 67.92899408284026], [77.0, 73.01587301587303], [78.0, 70.4427710843374], [79.0, 74.75159235668788], [80.0, 80.99657534246573], [81.0, 79.23717948717936], [82.0, 72.12721893491126], [83.0, 72.8176291793313], [84.0, 84.93290734824285], [85.0, 74.30330330330322], [86.0, 82.57728706624607], [87.0, 94.05185185185185], [88.0, 90.25752508361204], [89.0, 88.52702702702699], [90.0, 157.5116279069768], [91.0, 221.24626865671655], [92.0, 172.1446540880504], [93.0, 205.2962962962963], [94.0, 233.35106382978725], [95.0, 222.04705882352945], [96.0, 104.16095890410955], [97.0, 131.59903381642505], [98.0, 201.83064516129033], [99.0, 235.22142857142867], [100.0, 124.26881588121951], [1.0, 8.375000000000002]], "isOverall": false, "label": "POST /meetings", "isController": false}, {"data": [[76.1282287822877, 94.61984233478724]], "isOverall": false, "label": "POST /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1842.8, "minX": 1.69852719E12, "maxY": 261003.6, "series": [{"data": [[1.698527215E12, 154910.4], [1.698527235E12, 151370.4], [1.69852719E12, 1842.8], [1.6985272E12, 126438.4], [1.69852722E12, 114271.2], [1.69852724E12, 147830.4], [1.698527195E12, 129478.8], [1.698527205E12, 152783.6], [1.698527225E12, 127581.6], [1.698527245E12, 139511.4], [1.69852721E12, 155547.6], [1.69852723E12, 143971.8], [1.69852725E12, 140679.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.698527215E12, 259934.4], [1.698527235E12, 253994.4], [1.69852719E12, 3148.2], [1.6985272E12, 213364.8], [1.69852722E12, 191743.2], [1.69852724E12, 248054.4], [1.698527195E12, 218829.6], [1.698527205E12, 257261.4], [1.698527225E12, 214077.6], [1.698527245E12, 234095.4], [1.69852721E12, 261003.6], [1.69852723E12, 241579.8], [1.69852725E12, 236055.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852725E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8.018867924528301, "minX": 1.69852719E12, "maxY": 144.32125154894658, "series": [{"data": [[1.698527215E12, 87.86083180987208], [1.698527235E12, 117.15575304022418], [1.69852719E12, 8.018867924528301], [1.6985272E12, 37.130289532294], [1.69852722E12, 144.32125154894658], [1.69852724E12, 119.48012452107282], [1.698527195E12, 13.706026058631931], [1.698527205E12, 49.66335719233429], [1.698527225E12, 138.3837402885686], [1.698527245E12, 126.74016747018517], [1.69852721E12, 68.63632225762399], [1.69852723E12, 122.29333661175318], [1.69852725E12, 117.30699547055873]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852725E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7.9811320754717, "minX": 1.69852719E12, "maxY": 144.32063197026008, "series": [{"data": [[1.698527215E12, 87.86014625228474], [1.698527235E12, 117.15505144995305], [1.69852719E12, 7.9811320754717], [1.6985272E12, 37.12973273942078], [1.69852722E12, 144.32063197026008], [1.69852724E12, 119.47964559387003], [1.698527195E12, 13.704940282301843], [1.698527205E12, 49.66220272454397], [1.698527225E12, 138.3837402885686], [1.698527245E12, 126.73991372748027], [1.69852721E12, 68.63586709148844], [1.69852723E12, 122.29309073026803], [1.69852725E12, 117.30674383492702]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852725E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8646963749711372, "minX": 1.69852719E12, "maxY": 1.07720678632899, "series": [{"data": [[1.698527215E12, 0.8738574040219381], [1.698527235E12, 1.0647801683816633], [1.69852719E12, 0.9056603773584906], [1.6985272E12, 0.9713251670378631], [1.69852722E12, 0.8993184634448559], [1.69852724E12, 1.0771072796934862], [1.698527195E12, 0.9728555917480983], [1.698527205E12, 0.8646963749711372], [1.698527225E12, 1.006659267480579], [1.698527245E12, 1.0586145648312646], [1.69852721E12, 0.875739644970413], [1.69852723E12, 1.07720678632899], [1.69852725E12, 1.0578761952692504]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852725E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.69852719E12, "maxY": 330.0, "series": [{"data": [[1.698527215E12, 220.0], [1.698527235E12, 198.0], [1.69852719E12, 15.0], [1.6985272E12, 150.0], [1.69852722E12, 321.0], [1.69852724E12, 177.0], [1.698527195E12, 105.0], [1.698527205E12, 155.0], [1.698527225E12, 330.0], [1.698527245E12, 288.0], [1.69852721E12, 195.0], [1.69852723E12, 232.0], [1.69852725E12, 170.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.698527215E12, 59.0], [1.698527235E12, 91.0], [1.69852719E12, 6.0], [1.6985272E12, 11.0], [1.69852722E12, 72.0], [1.69852724E12, 97.0], [1.698527195E12, 6.0], [1.698527205E12, 28.0], [1.698527225E12, 87.0], [1.698527245E12, 89.0], [1.69852721E12, 41.0], [1.69852723E12, 99.0], [1.69852725E12, 99.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.698527215E12, 143.0], [1.698527235E12, 130.0], [1.69852719E12, 9.0], [1.6985272E12, 66.0], [1.69852722E12, 230.0], [1.69852724E12, 143.0], [1.698527195E12, 18.0], [1.698527205E12, 76.0], [1.698527225E12, 211.0], [1.698527245E12, 149.0], [1.69852721E12, 121.5], [1.69852723E12, 138.0], [1.69852725E12, 129.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.698527215E12, 210.22999999999956], [1.698527235E12, 173.0], [1.69852719E12, 15.0], [1.6985272E12, 116.0], [1.69852722E12, 289.71000000000004], [1.69852724E12, 171.0], [1.698527195E12, 27.0], [1.698527205E12, 143.0], [1.698527225E12, 290.0], [1.698527245E12, 249.0], [1.69852721E12, 173.0], [1.69852723E12, 194.32000000000016], [1.69852725E12, 162.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.698527215E12, 74.0], [1.698527235E12, 115.0], [1.69852719E12, 8.0], [1.6985272E12, 30.0], [1.69852722E12, 116.0], [1.69852724E12, 116.0], [1.698527195E12, 13.0], [1.698527205E12, 43.0], [1.698527225E12, 120.0], [1.698527245E12, 118.0], [1.69852721E12, 57.0], [1.69852723E12, 118.0], [1.69852725E12, 115.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.698527215E12, 177.0], [1.698527235E12, 135.0], [1.69852719E12, 10.299999999999997], [1.6985272E12, 95.0], [1.69852722E12, 243.54999999999973], [1.69852724E12, 153.0], [1.698527195E12, 20.0], [1.698527205E12, 110.0], [1.698527225E12, 243.0], [1.698527245E12, 203.0], [1.69852721E12, 133.0], [1.69852723E12, 164.0], [1.69852725E12, 138.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852725E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 53.0, "maxY": 217.0, "series": [{"data": [[555.0, 41.0], [572.0, 119.0], [553.0, 194.0], [597.0, 29.0], [589.0, 38.0], [580.0, 132.0], [604.0, 111.0], [623.0, 11.0], [662.0, 63.0], [645.0, 148.0], [648.0, 117.0], [681.0, 117.0], [727.0, 71.0], [734.0, 112.0], [724.0, 144.0], [745.0, 59.0], [791.0, 43.0], [770.0, 118.0], [790.0, 131.0], [799.0, 121.0], [807.0, 12.0], [827.0, 41.0], [809.0, 121.0], [824.0, 120.0], [856.0, 117.0], [854.0, 114.0], [855.0, 117.0], [849.0, 113.0], [862.0, 115.0], [842.0, 118.0], [837.0, 120.0], [860.0, 113.0], [846.0, 118.0], [861.0, 115.0], [834.0, 115.0], [889.0, 112.0], [882.0, 114.0], [871.0, 115.0], [865.0, 116.0], [875.0, 113.0], [920.0, 16.0], [896.0, 29.0], [900.0, 112.0], [955.0, 21.0], [935.0, 61.0], [971.0, 13.0], [983.0, 41.0], [979.0, 87.0], [1068.0, 44.0], [1029.0, 69.0], [1113.0, 51.0], [1092.0, 71.0], [1094.0, 74.0], [53.0, 8.0], [363.0, 9.0], [434.0, 159.0], [435.0, 217.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1113.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 53.0, "maxY": 217.0, "series": [{"data": [[555.0, 41.0], [572.0, 119.0], [553.0, 194.0], [597.0, 29.0], [589.0, 38.0], [580.0, 132.0], [604.0, 111.0], [623.0, 11.0], [662.0, 63.0], [645.0, 148.0], [648.0, 117.0], [681.0, 117.0], [727.0, 71.0], [734.0, 112.0], [724.0, 144.0], [745.0, 59.0], [791.0, 43.0], [770.0, 118.0], [790.0, 131.0], [799.0, 121.0], [807.0, 12.0], [827.0, 41.0], [809.0, 121.0], [824.0, 120.0], [856.0, 117.0], [854.0, 114.0], [855.0, 117.0], [849.0, 113.0], [862.0, 115.0], [842.0, 118.0], [837.0, 120.0], [860.0, 113.0], [846.0, 118.0], [861.0, 115.0], [834.0, 115.0], [889.0, 112.0], [882.0, 114.0], [871.0, 115.0], [865.0, 116.0], [875.0, 113.0], [920.0, 16.0], [896.0, 29.0], [900.0, 112.0], [955.0, 21.0], [935.0, 61.0], [971.0, 13.0], [983.0, 41.0], [979.0, 87.0], [1068.0, 44.0], [1029.0, 69.0], [1113.0, 51.0], [1092.0, 71.0], [1094.0, 74.0], [53.0, 8.0], [363.0, 9.0], [434.0, 159.0], [435.0, 217.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1113.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.69852719E12, "maxY": 882.2, "series": [{"data": [[1.698527215E12, 878.4], [1.698527235E12, 855.2], [1.69852719E12, 11.0], [1.6985272E12, 721.4], [1.69852722E12, 648.6], [1.69852724E12, 835.2], [1.698527195E12, 740.2], [1.698527205E12, 869.8], [1.698527225E12, 720.8], [1.698527245E12, 788.2], [1.69852721E12, 882.2], [1.69852723E12, 813.4], [1.69852725E12, 774.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852725E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.6, "minX": 1.69852719E12, "maxY": 878.8, "series": [{"data": [[1.698527215E12, 875.2], [1.698527235E12, 855.2], [1.69852719E12, 10.6], [1.6985272E12, 718.4], [1.69852722E12, 645.6], [1.69852724E12, 835.2], [1.698527195E12, 736.8], [1.698527205E12, 866.2], [1.698527225E12, 720.8], [1.698527245E12, 788.2], [1.69852721E12, 878.8], [1.69852723E12, 813.4], [1.69852725E12, 794.8]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852725E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.6, "minX": 1.69852719E12, "maxY": 878.8, "series": [{"data": [[1.698527215E12, 875.2], [1.698527235E12, 855.2], [1.69852719E12, 10.6], [1.6985272E12, 718.4], [1.69852722E12, 645.6], [1.69852724E12, 835.2], [1.698527195E12, 736.8], [1.698527205E12, 866.2], [1.698527225E12, 720.8], [1.698527245E12, 788.2], [1.69852721E12, 878.8], [1.69852723E12, 813.4], [1.69852725E12, 794.8]], "isOverall": false, "label": "POST /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852725E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.6, "minX": 1.69852719E12, "maxY": 878.8, "series": [{"data": [[1.698527215E12, 875.2], [1.698527235E12, 855.2], [1.69852719E12, 10.6], [1.6985272E12, 718.4], [1.69852722E12, 645.6], [1.69852724E12, 835.2], [1.698527195E12, 736.8], [1.698527205E12, 866.2], [1.698527225E12, 720.8], [1.698527245E12, 788.2], [1.69852721E12, 878.8], [1.69852723E12, 813.4], [1.69852725E12, 794.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852725E12, "title": "Total Transactions Per Second"}},
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

