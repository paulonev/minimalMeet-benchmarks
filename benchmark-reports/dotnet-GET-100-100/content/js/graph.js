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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 2273.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 7.0], [0.8, 7.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 9.0], [1.8, 9.0], [1.9, 9.0], [2.0, 9.0], [2.1, 9.0], [2.2, 10.0], [2.3, 10.0], [2.4, 10.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 13.0], [5.0, 13.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 14.0], [5.6, 14.0], [5.7, 14.0], [5.8, 14.0], [5.9, 14.0], [6.0, 15.0], [6.1, 15.0], [6.2, 15.0], [6.3, 15.0], [6.4, 15.0], [6.5, 15.0], [6.6, 15.0], [6.7, 15.0], [6.8, 15.0], [6.9, 15.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 17.0], [8.1, 17.0], [8.2, 17.0], [8.3, 17.0], [8.4, 17.0], [8.5, 17.0], [8.6, 17.0], [8.7, 17.0], [8.8, 17.0], [8.9, 18.0], [9.0, 18.0], [9.1, 18.0], [9.2, 18.0], [9.3, 18.0], [9.4, 18.0], [9.5, 18.0], [9.6, 18.0], [9.7, 18.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 20.0], [10.7, 20.0], [10.8, 20.0], [10.9, 20.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 21.0], [12.1, 22.0], [12.2, 22.0], [12.3, 22.0], [12.4, 22.0], [12.5, 22.0], [12.6, 22.0], [12.7, 22.0], [12.8, 22.0], [12.9, 23.0], [13.0, 23.0], [13.1, 23.0], [13.2, 23.0], [13.3, 23.0], [13.4, 23.0], [13.5, 24.0], [13.6, 24.0], [13.7, 24.0], [13.8, 24.0], [13.9, 24.0], [14.0, 24.0], [14.1, 24.0], [14.2, 25.0], [14.3, 25.0], [14.4, 25.0], [14.5, 25.0], [14.6, 25.0], [14.7, 25.0], [14.8, 25.0], [14.9, 25.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 26.0], [15.6, 26.0], [15.7, 27.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 27.0], [16.4, 28.0], [16.5, 28.0], [16.6, 28.0], [16.7, 28.0], [16.8, 28.0], [16.9, 28.0], [17.0, 28.0], [17.1, 28.0], [17.2, 29.0], [17.3, 29.0], [17.4, 29.0], [17.5, 29.0], [17.6, 29.0], [17.7, 29.0], [17.8, 29.0], [17.9, 29.0], [18.0, 30.0], [18.1, 30.0], [18.2, 30.0], [18.3, 30.0], [18.4, 30.0], [18.5, 30.0], [18.6, 30.0], [18.7, 30.0], [18.8, 31.0], [18.9, 31.0], [19.0, 31.0], [19.1, 31.0], [19.2, 31.0], [19.3, 31.0], [19.4, 31.0], [19.5, 31.0], [19.6, 31.0], [19.7, 31.0], [19.8, 32.0], [19.9, 32.0], [20.0, 32.0], [20.1, 32.0], [20.2, 32.0], [20.3, 32.0], [20.4, 32.0], [20.5, 32.0], [20.6, 33.0], [20.7, 33.0], [20.8, 33.0], [20.9, 33.0], [21.0, 33.0], [21.1, 33.0], [21.2, 33.0], [21.3, 33.0], [21.4, 33.0], [21.5, 34.0], [21.6, 34.0], [21.7, 34.0], [21.8, 34.0], [21.9, 34.0], [22.0, 34.0], [22.1, 34.0], [22.2, 34.0], [22.3, 34.0], [22.4, 35.0], [22.5, 35.0], [22.6, 35.0], [22.7, 35.0], [22.8, 35.0], [22.9, 35.0], [23.0, 35.0], [23.1, 36.0], [23.2, 36.0], [23.3, 36.0], [23.4, 36.0], [23.5, 36.0], [23.6, 36.0], [23.7, 36.0], [23.8, 36.0], [23.9, 37.0], [24.0, 37.0], [24.1, 37.0], [24.2, 37.0], [24.3, 37.0], [24.4, 37.0], [24.5, 37.0], [24.6, 38.0], [24.7, 38.0], [24.8, 38.0], [24.9, 38.0], [25.0, 38.0], [25.1, 38.0], [25.2, 38.0], [25.3, 39.0], [25.4, 39.0], [25.5, 39.0], [25.6, 39.0], [25.7, 39.0], [25.8, 39.0], [25.9, 40.0], [26.0, 40.0], [26.1, 40.0], [26.2, 40.0], [26.3, 40.0], [26.4, 40.0], [26.5, 41.0], [26.6, 41.0], [26.7, 41.0], [26.8, 41.0], [26.9, 41.0], [27.0, 41.0], [27.1, 42.0], [27.2, 42.0], [27.3, 42.0], [27.4, 42.0], [27.5, 42.0], [27.6, 43.0], [27.7, 43.0], [27.8, 43.0], [27.9, 43.0], [28.0, 43.0], [28.1, 44.0], [28.2, 44.0], [28.3, 44.0], [28.4, 44.0], [28.5, 44.0], [28.6, 45.0], [28.7, 45.0], [28.8, 45.0], [28.9, 45.0], [29.0, 46.0], [29.1, 46.0], [29.2, 46.0], [29.3, 46.0], [29.4, 47.0], [29.5, 47.0], [29.6, 47.0], [29.7, 47.0], [29.8, 47.0], [29.9, 48.0], [30.0, 48.0], [30.1, 48.0], [30.2, 48.0], [30.3, 49.0], [30.4, 49.0], [30.5, 49.0], [30.6, 49.0], [30.7, 50.0], [30.8, 50.0], [30.9, 50.0], [31.0, 50.0], [31.1, 51.0], [31.2, 51.0], [31.3, 51.0], [31.4, 51.0], [31.5, 51.0], [31.6, 52.0], [31.7, 52.0], [31.8, 52.0], [31.9, 52.0], [32.0, 53.0], [32.1, 53.0], [32.2, 53.0], [32.3, 53.0], [32.4, 54.0], [32.5, 54.0], [32.6, 54.0], [32.7, 54.0], [32.8, 55.0], [32.9, 55.0], [33.0, 55.0], [33.1, 55.0], [33.2, 56.0], [33.3, 56.0], [33.4, 56.0], [33.5, 56.0], [33.6, 57.0], [33.7, 57.0], [33.8, 57.0], [33.9, 57.0], [34.0, 57.0], [34.1, 58.0], [34.2, 58.0], [34.3, 58.0], [34.4, 58.0], [34.5, 59.0], [34.6, 59.0], [34.7, 59.0], [34.8, 59.0], [34.9, 60.0], [35.0, 60.0], [35.1, 60.0], [35.2, 60.0], [35.3, 61.0], [35.4, 61.0], [35.5, 61.0], [35.6, 61.0], [35.7, 61.0], [35.8, 62.0], [35.9, 62.0], [36.0, 62.0], [36.1, 62.0], [36.2, 63.0], [36.3, 63.0], [36.4, 63.0], [36.5, 63.0], [36.6, 64.0], [36.7, 64.0], [36.8, 64.0], [36.9, 64.0], [37.0, 64.0], [37.1, 65.0], [37.2, 65.0], [37.3, 65.0], [37.4, 65.0], [37.5, 66.0], [37.6, 66.0], [37.7, 66.0], [37.8, 66.0], [37.9, 67.0], [38.0, 67.0], [38.1, 67.0], [38.2, 67.0], [38.3, 67.0], [38.4, 68.0], [38.5, 68.0], [38.6, 68.0], [38.7, 68.0], [38.8, 69.0], [38.9, 69.0], [39.0, 69.0], [39.1, 69.0], [39.2, 70.0], [39.3, 70.0], [39.4, 70.0], [39.5, 70.0], [39.6, 71.0], [39.7, 71.0], [39.8, 71.0], [39.9, 71.0], [40.0, 71.0], [40.1, 72.0], [40.2, 72.0], [40.3, 72.0], [40.4, 72.0], [40.5, 73.0], [40.6, 73.0], [40.7, 73.0], [40.8, 73.0], [40.9, 74.0], [41.0, 74.0], [41.1, 74.0], [41.2, 74.0], [41.3, 75.0], [41.4, 75.0], [41.5, 75.0], [41.6, 75.0], [41.7, 75.0], [41.8, 76.0], [41.9, 76.0], [42.0, 76.0], [42.1, 76.0], [42.2, 77.0], [42.3, 77.0], [42.4, 77.0], [42.5, 77.0], [42.6, 78.0], [42.7, 78.0], [42.8, 78.0], [42.9, 78.0], [43.0, 78.0], [43.1, 79.0], [43.2, 79.0], [43.3, 79.0], [43.4, 79.0], [43.5, 79.0], [43.6, 80.0], [43.7, 80.0], [43.8, 80.0], [43.9, 80.0], [44.0, 80.0], [44.1, 81.0], [44.2, 81.0], [44.3, 81.0], [44.4, 81.0], [44.5, 81.0], [44.6, 82.0], [44.7, 82.0], [44.8, 82.0], [44.9, 82.0], [45.0, 82.0], [45.1, 83.0], [45.2, 83.0], [45.3, 83.0], [45.4, 83.0], [45.5, 83.0], [45.6, 83.0], [45.7, 84.0], [45.8, 84.0], [45.9, 84.0], [46.0, 84.0], [46.1, 84.0], [46.2, 85.0], [46.3, 85.0], [46.4, 85.0], [46.5, 85.0], [46.6, 85.0], [46.7, 85.0], [46.8, 85.0], [46.9, 86.0], [47.0, 86.0], [47.1, 86.0], [47.2, 86.0], [47.3, 86.0], [47.4, 86.0], [47.5, 87.0], [47.6, 87.0], [47.7, 87.0], [47.8, 87.0], [47.9, 87.0], [48.0, 87.0], [48.1, 88.0], [48.2, 88.0], [48.3, 88.0], [48.4, 88.0], [48.5, 88.0], [48.6, 88.0], [48.7, 88.0], [48.8, 89.0], [48.9, 89.0], [49.0, 89.0], [49.1, 89.0], [49.2, 89.0], [49.3, 89.0], [49.4, 89.0], [49.5, 90.0], [49.6, 90.0], [49.7, 90.0], [49.8, 90.0], [49.9, 90.0], [50.0, 90.0], [50.1, 90.0], [50.2, 91.0], [50.3, 91.0], [50.4, 91.0], [50.5, 91.0], [50.6, 91.0], [50.7, 91.0], [50.8, 92.0], [50.9, 92.0], [51.0, 92.0], [51.1, 92.0], [51.2, 92.0], [51.3, 92.0], [51.4, 92.0], [51.5, 92.0], [51.6, 93.0], [51.7, 93.0], [51.8, 93.0], [51.9, 93.0], [52.0, 93.0], [52.1, 93.0], [52.2, 93.0], [52.3, 94.0], [52.4, 94.0], [52.5, 94.0], [52.6, 94.0], [52.7, 94.0], [52.8, 94.0], [52.9, 94.0], [53.0, 94.0], [53.1, 95.0], [53.2, 95.0], [53.3, 95.0], [53.4, 95.0], [53.5, 95.0], [53.6, 95.0], [53.7, 95.0], [53.8, 96.0], [53.9, 96.0], [54.0, 96.0], [54.1, 96.0], [54.2, 96.0], [54.3, 96.0], [54.4, 96.0], [54.5, 96.0], [54.6, 97.0], [54.7, 97.0], [54.8, 97.0], [54.9, 97.0], [55.0, 97.0], [55.1, 97.0], [55.2, 97.0], [55.3, 97.0], [55.4, 98.0], [55.5, 98.0], [55.6, 98.0], [55.7, 98.0], [55.8, 98.0], [55.9, 98.0], [56.0, 98.0], [56.1, 98.0], [56.2, 98.0], [56.3, 99.0], [56.4, 99.0], [56.5, 99.0], [56.6, 99.0], [56.7, 99.0], [56.8, 99.0], [56.9, 99.0], [57.0, 99.0], [57.1, 99.0], [57.2, 100.0], [57.3, 100.0], [57.4, 100.0], [57.5, 100.0], [57.6, 100.0], [57.7, 100.0], [57.8, 100.0], [57.9, 100.0], [58.0, 100.0], [58.1, 101.0], [58.2, 101.0], [58.3, 101.0], [58.4, 101.0], [58.5, 101.0], [58.6, 101.0], [58.7, 101.0], [58.8, 101.0], [58.9, 101.0], [59.0, 101.0], [59.1, 102.0], [59.2, 102.0], [59.3, 102.0], [59.4, 102.0], [59.5, 102.0], [59.6, 102.0], [59.7, 102.0], [59.8, 102.0], [59.9, 102.0], [60.0, 103.0], [60.1, 103.0], [60.2, 103.0], [60.3, 103.0], [60.4, 103.0], [60.5, 103.0], [60.6, 103.0], [60.7, 103.0], [60.8, 103.0], [60.9, 104.0], [61.0, 104.0], [61.1, 104.0], [61.2, 104.0], [61.3, 104.0], [61.4, 104.0], [61.5, 104.0], [61.6, 104.0], [61.7, 105.0], [61.8, 105.0], [61.9, 105.0], [62.0, 105.0], [62.1, 105.0], [62.2, 105.0], [62.3, 105.0], [62.4, 105.0], [62.5, 106.0], [62.6, 106.0], [62.7, 106.0], [62.8, 106.0], [62.9, 106.0], [63.0, 106.0], [63.1, 106.0], [63.2, 106.0], [63.3, 106.0], [63.4, 107.0], [63.5, 107.0], [63.6, 107.0], [63.7, 107.0], [63.8, 107.0], [63.9, 107.0], [64.0, 107.0], [64.1, 107.0], [64.2, 107.0], [64.3, 108.0], [64.4, 108.0], [64.5, 108.0], [64.6, 108.0], [64.7, 108.0], [64.8, 108.0], [64.9, 108.0], [65.0, 108.0], [65.1, 108.0], [65.2, 109.0], [65.3, 109.0], [65.4, 109.0], [65.5, 109.0], [65.6, 109.0], [65.7, 109.0], [65.8, 109.0], [65.9, 109.0], [66.0, 109.0], [66.1, 110.0], [66.2, 110.0], [66.3, 110.0], [66.4, 110.0], [66.5, 110.0], [66.6, 110.0], [66.7, 110.0], [66.8, 110.0], [66.9, 111.0], [67.0, 111.0], [67.1, 111.0], [67.2, 111.0], [67.3, 111.0], [67.4, 111.0], [67.5, 111.0], [67.6, 111.0], [67.7, 111.0], [67.8, 112.0], [67.9, 112.0], [68.0, 112.0], [68.1, 112.0], [68.2, 112.0], [68.3, 112.0], [68.4, 112.0], [68.5, 112.0], [68.6, 113.0], [68.7, 113.0], [68.8, 113.0], [68.9, 113.0], [69.0, 113.0], [69.1, 113.0], [69.2, 113.0], [69.3, 113.0], [69.4, 113.0], [69.5, 114.0], [69.6, 114.0], [69.7, 114.0], [69.8, 114.0], [69.9, 114.0], [70.0, 114.0], [70.1, 114.0], [70.2, 115.0], [70.3, 115.0], [70.4, 115.0], [70.5, 115.0], [70.6, 115.0], [70.7, 115.0], [70.8, 115.0], [70.9, 115.0], [71.0, 116.0], [71.1, 116.0], [71.2, 116.0], [71.3, 116.0], [71.4, 116.0], [71.5, 116.0], [71.6, 116.0], [71.7, 116.0], [71.8, 117.0], [71.9, 117.0], [72.0, 117.0], [72.1, 117.0], [72.2, 117.0], [72.3, 117.0], [72.4, 117.0], [72.5, 118.0], [72.6, 118.0], [72.7, 118.0], [72.8, 118.0], [72.9, 118.0], [73.0, 118.0], [73.1, 118.0], [73.2, 118.0], [73.3, 119.0], [73.4, 119.0], [73.5, 119.0], [73.6, 119.0], [73.7, 119.0], [73.8, 119.0], [73.9, 119.0], [74.0, 120.0], [74.1, 120.0], [74.2, 120.0], [74.3, 120.0], [74.4, 120.0], [74.5, 120.0], [74.6, 120.0], [74.7, 121.0], [74.8, 121.0], [74.9, 121.0], [75.0, 121.0], [75.1, 121.0], [75.2, 121.0], [75.3, 121.0], [75.4, 122.0], [75.5, 122.0], [75.6, 122.0], [75.7, 122.0], [75.8, 122.0], [75.9, 122.0], [76.0, 122.0], [76.1, 123.0], [76.2, 123.0], [76.3, 123.0], [76.4, 123.0], [76.5, 123.0], [76.6, 123.0], [76.7, 123.0], [76.8, 124.0], [76.9, 124.0], [77.0, 124.0], [77.1, 124.0], [77.2, 124.0], [77.3, 124.0], [77.4, 124.0], [77.5, 125.0], [77.6, 125.0], [77.7, 125.0], [77.8, 125.0], [77.9, 125.0], [78.0, 125.0], [78.1, 125.0], [78.2, 126.0], [78.3, 126.0], [78.4, 126.0], [78.5, 126.0], [78.6, 126.0], [78.7, 126.0], [78.8, 126.0], [78.9, 127.0], [79.0, 127.0], [79.1, 127.0], [79.2, 127.0], [79.3, 127.0], [79.4, 127.0], [79.5, 128.0], [79.6, 128.0], [79.7, 128.0], [79.8, 128.0], [79.9, 128.0], [80.0, 129.0], [80.1, 129.0], [80.2, 129.0], [80.3, 129.0], [80.4, 129.0], [80.5, 129.0], [80.6, 130.0], [80.7, 130.0], [80.8, 130.0], [80.9, 130.0], [81.0, 130.0], [81.1, 130.0], [81.2, 131.0], [81.3, 131.0], [81.4, 131.0], [81.5, 131.0], [81.6, 131.0], [81.7, 131.0], [81.8, 132.0], [81.9, 132.0], [82.0, 132.0], [82.1, 132.0], [82.2, 132.0], [82.3, 133.0], [82.4, 133.0], [82.5, 133.0], [82.6, 133.0], [82.7, 133.0], [82.8, 133.0], [82.9, 134.0], [83.0, 134.0], [83.1, 134.0], [83.2, 134.0], [83.3, 135.0], [83.4, 135.0], [83.5, 135.0], [83.6, 135.0], [83.7, 135.0], [83.8, 136.0], [83.9, 136.0], [84.0, 136.0], [84.1, 136.0], [84.2, 136.0], [84.3, 137.0], [84.4, 137.0], [84.5, 137.0], [84.6, 137.0], [84.7, 138.0], [84.8, 138.0], [84.9, 138.0], [85.0, 138.0], [85.1, 138.0], [85.2, 139.0], [85.3, 139.0], [85.4, 139.0], [85.5, 139.0], [85.6, 140.0], [85.7, 140.0], [85.8, 140.0], [85.9, 140.0], [86.0, 141.0], [86.1, 141.0], [86.2, 141.0], [86.3, 141.0], [86.4, 142.0], [86.5, 142.0], [86.6, 142.0], [86.7, 142.0], [86.8, 143.0], [86.9, 143.0], [87.0, 143.0], [87.1, 143.0], [87.2, 144.0], [87.3, 144.0], [87.4, 144.0], [87.5, 145.0], [87.6, 145.0], [87.7, 145.0], [87.8, 145.0], [87.9, 146.0], [88.0, 146.0], [88.1, 146.0], [88.2, 147.0], [88.3, 147.0], [88.4, 147.0], [88.5, 148.0], [88.6, 148.0], [88.7, 148.0], [88.8, 149.0], [88.9, 149.0], [89.0, 149.0], [89.1, 150.0], [89.2, 150.0], [89.3, 150.0], [89.4, 151.0], [89.5, 151.0], [89.6, 151.0], [89.7, 152.0], [89.8, 152.0], [89.9, 153.0], [90.0, 153.0], [90.1, 153.0], [90.2, 154.0], [90.3, 154.0], [90.4, 154.0], [90.5, 155.0], [90.6, 155.0], [90.7, 156.0], [90.8, 156.0], [90.9, 156.0], [91.0, 157.0], [91.1, 157.0], [91.2, 157.0], [91.3, 158.0], [91.4, 158.0], [91.5, 159.0], [91.6, 159.0], [91.7, 159.0], [91.8, 160.0], [91.9, 160.0], [92.0, 161.0], [92.1, 161.0], [92.2, 162.0], [92.3, 162.0], [92.4, 163.0], [92.5, 163.0], [92.6, 164.0], [92.7, 164.0], [92.8, 165.0], [92.9, 165.0], [93.0, 165.0], [93.1, 166.0], [93.2, 166.0], [93.3, 167.0], [93.4, 167.0], [93.5, 168.0], [93.6, 168.0], [93.7, 169.0], [93.8, 169.0], [93.9, 170.0], [94.0, 171.0], [94.1, 171.0], [94.2, 172.0], [94.3, 173.0], [94.4, 173.0], [94.5, 174.0], [94.6, 175.0], [94.7, 176.0], [94.8, 176.0], [94.9, 177.0], [95.0, 178.0], [95.1, 179.0], [95.2, 180.0], [95.3, 181.0], [95.4, 182.0], [95.5, 183.0], [95.6, 184.0], [95.7, 185.0], [95.8, 186.0], [95.9, 187.0], [96.0, 188.0], [96.1, 190.0], [96.2, 191.0], [96.3, 192.0], [96.4, 194.0], [96.5, 196.0], [96.6, 197.0], [96.7, 199.0], [96.8, 201.0], [96.9, 204.0], [97.0, 207.0], [97.1, 211.0], [97.2, 215.0], [97.3, 218.0], [97.4, 222.0], [97.5, 227.0], [97.6, 235.0], [97.7, 242.0], [97.8, 257.0], [97.9, 296.0], [98.0, 416.0], [98.1, 608.0], [98.2, 1160.0], [98.3, 1199.0], [98.4, 1285.0], [98.5, 1301.0], [98.6, 1322.0], [98.7, 1405.0], [98.8, 1418.0], [98.9, 1427.0], [99.0, 1438.0], [99.1, 1481.0], [99.2, 1515.0], [99.3, 1549.0], [99.4, 1614.0], [99.5, 1626.0], [99.6, 1667.0], [99.7, 1692.0], [99.8, 1715.0], [99.9, 2239.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23007.0, "series": [{"data": [[0.0, 23007.0], [2100.0, 1.0], [2200.0, 66.0], [600.0, 1.0], [700.0, 1.0], [200.0, 471.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 77.0], [300.0, 24.0], [1200.0, 79.0], [1300.0, 67.0], [1400.0, 193.0], [1500.0, 84.0], [100.0, 15939.0], [400.0, 54.0], [1600.0, 154.0], [1700.0, 39.0], [1900.0, 1.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 343.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39495.0, "series": [{"data": [[0.0, 39495.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 422.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 343.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.540904383845344, "minX": 1.6985228E12, "maxY": 100.0, "series": [{"data": [[1.698522855E12, 100.0], [1.698522815E12, 57.81546261089993], [1.698522835E12, 100.0], [1.69852285E12, 100.0], [1.69852281E12, 40.82864820173634], [1.69852283E12, 99.97425742574232], [1.698522845E12, 100.0], [1.698522805E12, 24.03403195683754], [1.698522825E12, 91.55395683453236], [1.69852284E12, 100.0], [1.69852286E12, 90.10865191146875], [1.6985228E12, 9.540904383845344], [1.69852282E12, 77.07532210109002]], "isOverall": false, "label": "MinimalMeet-dotnet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852286E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.999999999999999, "minX": 1.0, "maxY": 1505.818181818182, "series": [{"data": [[2.0, 5.71875], [3.0, 7.352112676056339], [4.0, 7.60431654676259], [5.0, 11.242857142857144], [6.0, 11.480000000000006], [7.0, 9.749999999999995], [8.0, 10.683720930232552], [9.0, 12.108786610878656], [10.0, 12.761061946902654], [11.0, 15.461187214611876], [12.0, 15.304347826086968], [13.0, 14.134328358208956], [14.0, 15.068840579710143], [15.0, 19.56066945606694], [16.0, 21.259740259740244], [17.0, 17.143835616438366], [18.0, 17.55194805194806], [19.0, 19.314189189189193], [20.0, 17.46064139941691], [21.0, 21.473867595818803], [22.0, 20.7308868501529], [23.0, 20.34954407294832], [24.0, 28.90688259109311], [25.0, 27.67753623188407], [26.0, 24.784313725490172], [27.0, 29.18727915194344], [28.0, 28.75172413793104], [29.0, 34.66666666666668], [30.0, 35.84400000000001], [31.0, 28.01488095238097], [32.0, 36.75100401606425], [33.0, 47.036866359447046], [34.0, 56.69613259668513], [35.0, 36.50526315789473], [36.0, 34.88924050632916], [37.0, 34.951768488745984], [38.0, 35.85669781931465], [39.0, 37.083333333333336], [40.0, 37.168224299065386], [41.0, 33.38904109589041], [42.0, 34.163487738419626], [43.0, 36.03966005665721], [44.0, 37.569832402234645], [45.0, 39.23615160349854], [46.0, 58.347031963470315], [47.0, 73.938202247191], [48.0, 58.08727272727272], [49.0, 68.37155963302757], [50.0, 55.88281249999996], [51.0, 59.43396226415095], [52.0, 79.00578034682079], [53.0, 71.88016528925617], [55.0, 134.10887096774195], [54.0, 107.0], [56.0, 57.45104895104895], [57.0, 61.78571428571428], [58.0, 78.25106382978728], [59.0, 62.919413919413905], [60.0, 64.95910780669146], [61.0, 79.58091286307055], [62.0, 66.24535315985138], [63.0, 79.72177419354831], [64.0, 69.3003663003663], [65.0, 80.74583333333327], [66.0, 79.64777327935221], [67.0, 107.57142857142857], [71.0, 74.0], [70.0, 115.0], [69.0, 108.0], [68.0, 116.0], [74.0, 930.6145251396645], [75.0, 124.44047619047615], [73.0, 110.0], [72.0, 116.0], [76.0, 101.32300884955747], [77.0, 112.11627906976744], [78.0, 106.30434782608693], [79.0, 122.00000000000006], [80.0, 121.3333333333333], [81.0, 112.67289719626164], [82.0, 103.93644067796612], [83.0, 124.80676328502419], [84.0, 117.66145833333336], [85.0, 145.9818181818181], [86.0, 196.81118881118886], [87.0, 127.59162303664912], [88.0, 139.73429951690827], [89.0, 110.0769230769231], [91.0, 103.5], [94.0, 1505.818181818182], [95.0, 152.8068965517242], [96.0, 102.21283783783775], [97.0, 95.64539007092202], [98.0, 103.57913669064747], [99.0, 125.42460317460313], [100.0, 160.0246391371006], [1.0, 4.999999999999999]], "isOverall": false, "label": "GET /meetings", "isController": false}, {"data": [[71.32657724788902, 112.05504222553338]], "isOverall": false, "label": "GET /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15108.8, "minX": 1.6985228E12, "maxY": 2.67909088E7, "series": [{"data": [[1.698522855E12, 1.54720544E7], [1.698522815E12, 2.1845832E7], [1.698522835E12, 1.92265472E7], [1.69852285E12, 1.72717744E7], [1.69852281E12, 2.67909088E7], [1.69852283E12, 1.6778928E7], [1.698522845E12, 1.72662368E7], [1.698522805E12, 2.66856944E7], [1.698522825E12, 1.46248016E7], [1.69852284E12, 1.70115072E7], [1.69852286E12, 2752187.2], [1.6985228E12, 1.60424272E7], [1.69852282E12, 1.11748768E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.698522855E12, 84937.6], [1.698522815E12, 119928.0], [1.698522835E12, 105548.8], [1.69852285E12, 94817.6], [1.69852281E12, 147075.2], [1.69852283E12, 92112.0], [1.698522845E12, 94787.2], [1.698522805E12, 146497.6], [1.698522825E12, 80286.4], [1.69852284E12, 93388.8], [1.69852286E12, 15108.8], [1.6985228E12, 88068.8], [1.69852282E12, 61347.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852286E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12.418709009320002, "minX": 1.6985228E12, "maxY": 182.1179385530232, "series": [{"data": [[1.698522855E12, 179.14853256979256], [1.698522815E12, 72.48922686945508], [1.698522835E12, 143.85483870967767], [1.69852285E12, 159.61045206797007], [1.69852281E12, 41.803224472922764], [1.69852283E12, 164.57722772277225], [1.698522845E12, 160.77581783194307], [1.698522805E12, 24.71093587881299], [1.698522825E12, 171.58689890193122], [1.69852284E12, 162.376627604167], [1.69852286E12, 102.15090543259551], [1.6985228E12, 12.418709009320002], [1.69852282E12, 182.1179385530232]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852286E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12.238177424922327, "minX": 1.6985228E12, "maxY": 179.58275520317164, "series": [{"data": [[1.698522855E12, 176.95418754473894], [1.698522815E12, 71.59999999999995], [1.698522835E12, 142.09677419354836], [1.69852285E12, 156.83039435716583], [1.69852281E12, 41.394171145101254], [1.69852283E12, 162.51815181518154], [1.698522845E12, 157.72193713919174], [1.698522805E12, 24.500103755965927], [1.698522825E12, 168.54108292313524], [1.69852284E12, 160.0371093750003], [1.69852286E12, 100.71428571428575], [1.6985228E12, 12.238177424922327], [1.69852282E12, 179.58275520317164]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852286E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.182602692440455, "minX": 1.6985228E12, "maxY": 1.6419270833333357, "series": [{"data": [[1.698522855E12, 1.5637079455977072], [1.698522815E12, 1.5158428390367567], [1.698522835E12, 1.5233294930875572], [1.69852285E12, 1.6142994549535064], [1.69852281E12, 1.2257131045886742], [1.69852283E12, 1.574587458745872], [1.698522845E12, 1.5564464400256584], [1.698522805E12, 1.1836480597634376], [1.698522825E12, 1.4736842105263153], [1.69852284E12, 1.6419270833333357], [1.69852286E12, 1.61569416498994], [1.6985228E12, 1.182602692440455], [1.69852282E12, 1.486620416253714]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852286E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6985228E12, "maxY": 2273.0, "series": [{"data": [[1.698522855E12, 1774.0], [1.698522815E12, 463.0], [1.698522835E12, 1335.0], [1.69852285E12, 1477.0], [1.69852281E12, 141.0], [1.69852283E12, 1639.0], [1.698522845E12, 1248.0], [1.698522805E12, 77.0], [1.698522825E12, 1680.0], [1.69852284E12, 1511.0], [1.69852286E12, 172.0], [1.6985228E12, 42.0], [1.69852282E12, 2273.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.698522855E12, 21.0], [1.698522815E12, 15.0], [1.698522835E12, 26.0], [1.69852285E12, 17.0], [1.69852281E12, 14.0], [1.69852283E12, 25.0], [1.698522845E12, 30.0], [1.698522805E12, 8.0], [1.698522825E12, 16.0], [1.69852284E12, 22.0], [1.69852286E12, 24.0], [1.6985228E12, 4.0], [1.69852282E12, 25.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.698522855E12, 171.5], [1.698522815E12, 95.0], [1.698522835E12, 154.0], [1.69852285E12, 171.0], [1.69852281E12, 61.0], [1.69852283E12, 167.9000000000001], [1.698522845E12, 189.0], [1.698522805E12, 37.0], [1.698522825E12, 178.80000000000018], [1.69852284E12, 176.0], [1.69852286E12, 126.0], [1.6985228E12, 18.0], [1.69852282E12, 158.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.698522855E12, 1705.0500000000002], [1.698522815E12, 417.0799999999999], [1.698522835E12, 1304.0], [1.69852285E12, 1422.8000000000002], [1.69852281E12, 107.0], [1.69852283E12, 1544.0], [1.698522845E12, 1182.0], [1.698522805E12, 51.0], [1.698522825E12, 1627.58], [1.69852284E12, 1443.0], [1.69852286E12, 156.0999999999999], [1.6985228E12, 30.0], [1.69852282E12, 2254.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.698522855E12, 121.5], [1.698522815E12, 65.0], [1.698522835E12, 107.0], [1.69852285E12, 115.0], [1.69852281E12, 37.0], [1.69852283E12, 117.0], [1.698522845E12, 122.0], [1.698522805E12, 23.0], [1.698522825E12, 114.0], [1.69852284E12, 116.0], [1.69852286E12, 103.0], [1.6985228E12, 12.0], [1.69852282E12, 107.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.698522855E12, 196.25], [1.698522815E12, 108.0], [1.698522835E12, 181.0], [1.69852285E12, 201.0], [1.69852281E12, 74.05000000000018], [1.69852283E12, 196.44999999999982], [1.698522845E12, 238.0], [1.698522805E12, 41.0], [1.698522825E12, 233.9000000000001], [1.69852284E12, 208.3499999999999], [1.69852286E12, 137.09999999999997], [1.6985228E12, 21.0], [1.69852282E12, 187.04999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852286E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 72.0, "maxY": 1430.0, "series": [{"data": [[534.0, 112.0], [570.0, 122.0], [592.0, 57.0], [607.0, 129.0], [601.0, 127.0], [609.0, 119.0], [646.0, 132.0], [664.0, 107.0], [693.0, 10.0], [694.0, 64.0], [691.0, 106.0], [714.0, 111.0], [726.0, 132.0], [731.0, 137.0], [760.0, 13.0], [762.0, 120.0], [742.0, 134.0], [784.0, 51.0], [792.0, 111.0], [787.0, 120.0], [812.0, 103.0], [813.0, 120.0], [814.0, 120.0], [844.0, 15.0], [850.0, 68.0], [841.0, 75.0], [862.0, 116.0], [861.0, 115.0], [860.0, 112.0], [853.0, 113.0], [836.0, 120.0], [878.0, 63.0], [868.0, 109.0], [884.0, 112.0], [917.0, 32.0], [908.0, 104.0], [952.0, 20.0], [940.0, 27.0], [928.0, 99.0], [966.0, 99.0], [1058.0, 19.0], [1057.0, 34.0], [1150.0, 37.0], [1153.0, 34.0], [72.0, 1430.0], [125.0, 5.0], [127.0, 149.0], [182.0, 80.0], [202.0, 150.0], [349.0, 136.0], [431.0, 115.0], [460.0, 108.0], [475.0, 7.0], [497.0, 103.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1153.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 72.0, "maxY": 1430.0, "series": [{"data": [[534.0, 111.0], [570.0, 121.0], [592.0, 56.0], [607.0, 125.0], [601.0, 124.0], [609.0, 116.0], [646.0, 129.0], [664.0, 104.0], [693.0, 10.0], [694.0, 63.0], [691.0, 103.0], [714.0, 109.0], [726.0, 129.5], [731.0, 135.0], [760.0, 13.0], [762.0, 119.0], [742.0, 131.0], [784.0, 51.0], [792.0, 109.0], [787.0, 118.0], [812.0, 102.0], [813.0, 118.0], [814.0, 118.0], [844.0, 15.0], [850.0, 67.5], [841.0, 74.0], [862.0, 115.0], [861.0, 114.0], [860.0, 110.0], [853.0, 111.0], [836.0, 117.0], [878.0, 62.0], [868.0, 107.0], [884.0, 110.0], [917.0, 31.0], [908.0, 102.0], [952.0, 20.0], [940.0, 27.0], [928.0, 96.0], [966.0, 97.0], [1058.0, 18.0], [1057.0, 34.0], [1150.0, 37.0], [1153.0, 34.0], [72.0, 1430.0], [125.0, 5.0], [127.0, 148.0], [182.0, 79.0], [202.0, 149.5], [349.0, 136.0], [431.0, 111.0], [460.0, 106.0], [475.0, 7.0], [497.0, 101.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1153.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 79.4, "minX": 1.6985228E12, "maxY": 970.8, "series": [{"data": [[1.698522855E12, 558.8], [1.698522815E12, 792.4], [1.698522835E12, 694.4], [1.69852285E12, 623.8], [1.69852281E12, 970.8], [1.69852283E12, 606.2], [1.698522845E12, 623.6], [1.698522805E12, 967.0], [1.698522825E12, 531.4], [1.69852284E12, 614.4], [1.69852286E12, 79.4], [1.6985228E12, 582.6], [1.69852282E12, 407.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852286E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 99.4, "minX": 1.6985228E12, "maxY": 967.6, "series": [{"data": [[1.698522855E12, 558.8], [1.698522815E12, 789.0], [1.698522835E12, 694.4], [1.69852285E12, 623.8], [1.69852281E12, 967.6], [1.69852283E12, 606.0], [1.698522845E12, 623.6], [1.698522805E12, 963.8], [1.698522825E12, 528.2], [1.69852284E12, 614.4], [1.69852286E12, 99.4], [1.6985228E12, 579.4], [1.69852282E12, 403.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852286E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 99.4, "minX": 1.6985228E12, "maxY": 967.6, "series": [{"data": [[1.698522855E12, 558.8], [1.698522815E12, 789.0], [1.698522835E12, 694.4], [1.69852285E12, 623.8], [1.69852281E12, 967.6], [1.69852283E12, 606.0], [1.698522845E12, 623.6], [1.698522805E12, 963.8], [1.698522825E12, 528.2], [1.69852284E12, 614.4], [1.69852286E12, 99.4], [1.6985228E12, 579.4], [1.69852282E12, 403.6]], "isOverall": false, "label": "GET /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852286E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 99.4, "minX": 1.6985228E12, "maxY": 967.6, "series": [{"data": [[1.698522855E12, 558.8], [1.698522815E12, 789.0], [1.698522835E12, 694.4], [1.69852285E12, 623.8], [1.69852281E12, 967.6], [1.69852283E12, 606.0], [1.698522845E12, 623.6], [1.698522805E12, 963.8], [1.698522825E12, 528.2], [1.69852284E12, 614.4], [1.69852286E12, 99.4], [1.6985228E12, 579.4], [1.69852282E12, 403.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852286E12, "title": "Total Transactions Per Second"}},
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

