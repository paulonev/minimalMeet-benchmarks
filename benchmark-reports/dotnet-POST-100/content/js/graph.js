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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 301.0, "series": [{"data": [[0.0, 7.0], [0.1, 8.0], [0.2, 8.0], [0.3, 8.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 9.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 11.0], [1.4, 11.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 12.0], [1.9, 12.0], [2.0, 12.0], [2.1, 12.0], [2.2, 12.0], [2.3, 12.0], [2.4, 13.0], [2.5, 13.0], [2.6, 13.0], [2.7, 13.0], [2.8, 13.0], [2.9, 13.0], [3.0, 13.0], [3.1, 14.0], [3.2, 14.0], [3.3, 14.0], [3.4, 14.0], [3.5, 14.0], [3.6, 14.0], [3.7, 14.0], [3.8, 15.0], [3.9, 15.0], [4.0, 15.0], [4.1, 15.0], [4.2, 15.0], [4.3, 15.0], [4.4, 15.0], [4.5, 16.0], [4.6, 16.0], [4.7, 16.0], [4.8, 16.0], [4.9, 16.0], [5.0, 16.0], [5.1, 17.0], [5.2, 17.0], [5.3, 17.0], [5.4, 17.0], [5.5, 17.0], [5.6, 17.0], [5.7, 18.0], [5.8, 18.0], [5.9, 18.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 19.0], [6.5, 19.0], [6.6, 19.0], [6.7, 19.0], [6.8, 19.0], [6.9, 19.0], [7.0, 20.0], [7.1, 20.0], [7.2, 20.0], [7.3, 20.0], [7.4, 20.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 23.0], [8.4, 23.0], [8.5, 23.0], [8.6, 23.0], [8.7, 23.0], [8.8, 24.0], [8.9, 24.0], [9.0, 24.0], [9.1, 24.0], [9.2, 24.0], [9.3, 24.0], [9.4, 25.0], [9.5, 25.0], [9.6, 25.0], [9.7, 25.0], [9.8, 25.0], [9.9, 25.0], [10.0, 26.0], [10.1, 26.0], [10.2, 26.0], [10.3, 26.0], [10.4, 26.0], [10.5, 27.0], [10.6, 27.0], [10.7, 27.0], [10.8, 27.0], [10.9, 27.0], [11.0, 28.0], [11.1, 28.0], [11.2, 28.0], [11.3, 28.0], [11.4, 28.0], [11.5, 29.0], [11.6, 29.0], [11.7, 29.0], [11.8, 29.0], [11.9, 30.0], [12.0, 30.0], [12.1, 30.0], [12.2, 30.0], [12.3, 31.0], [12.4, 31.0], [12.5, 31.0], [12.6, 31.0], [12.7, 31.0], [12.8, 32.0], [12.9, 32.0], [13.0, 32.0], [13.1, 32.0], [13.2, 33.0], [13.3, 33.0], [13.4, 33.0], [13.5, 33.0], [13.6, 34.0], [13.7, 34.0], [13.8, 34.0], [13.9, 34.0], [14.0, 35.0], [14.1, 35.0], [14.2, 35.0], [14.3, 35.0], [14.4, 35.0], [14.5, 36.0], [14.6, 36.0], [14.7, 36.0], [14.8, 36.0], [14.9, 36.0], [15.0, 37.0], [15.1, 37.0], [15.2, 37.0], [15.3, 37.0], [15.4, 37.0], [15.5, 38.0], [15.6, 38.0], [15.7, 38.0], [15.8, 38.0], [15.9, 38.0], [16.0, 38.0], [16.1, 39.0], [16.2, 39.0], [16.3, 39.0], [16.4, 39.0], [16.5, 40.0], [16.6, 40.0], [16.7, 40.0], [16.8, 40.0], [16.9, 41.0], [17.0, 41.0], [17.1, 41.0], [17.2, 41.0], [17.3, 42.0], [17.4, 42.0], [17.5, 42.0], [17.6, 42.0], [17.7, 42.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 44.0], [18.3, 44.0], [18.4, 44.0], [18.5, 44.0], [18.6, 44.0], [18.7, 45.0], [18.8, 45.0], [18.9, 45.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 46.0], [19.4, 46.0], [19.5, 46.0], [19.6, 46.0], [19.7, 46.0], [19.8, 47.0], [19.9, 47.0], [20.0, 47.0], [20.1, 47.0], [20.2, 47.0], [20.3, 47.0], [20.4, 47.0], [20.5, 48.0], [20.6, 48.0], [20.7, 48.0], [20.8, 48.0], [20.9, 48.0], [21.0, 48.0], [21.1, 49.0], [21.2, 49.0], [21.3, 49.0], [21.4, 49.0], [21.5, 49.0], [21.6, 49.0], [21.7, 50.0], [21.8, 50.0], [21.9, 50.0], [22.0, 50.0], [22.1, 50.0], [22.2, 50.0], [22.3, 50.0], [22.4, 51.0], [22.5, 51.0], [22.6, 51.0], [22.7, 51.0], [22.8, 51.0], [22.9, 51.0], [23.0, 52.0], [23.1, 52.0], [23.2, 52.0], [23.3, 52.0], [23.4, 52.0], [23.5, 52.0], [23.6, 52.0], [23.7, 53.0], [23.8, 53.0], [23.9, 53.0], [24.0, 54.0], [24.1, 54.0], [24.2, 54.0], [24.3, 54.0], [24.4, 54.0], [24.5, 55.0], [24.6, 55.0], [24.7, 55.0], [24.8, 56.0], [24.9, 56.0], [25.0, 56.0], [25.1, 57.0], [25.2, 57.0], [25.3, 58.0], [25.4, 58.0], [25.5, 58.0], [25.6, 59.0], [25.7, 60.0], [25.8, 60.0], [25.9, 61.0], [26.0, 61.0], [26.1, 62.0], [26.2, 63.0], [26.3, 63.0], [26.4, 64.0], [26.5, 64.0], [26.6, 64.0], [26.7, 65.0], [26.8, 65.0], [26.9, 66.0], [27.0, 66.0], [27.1, 67.0], [27.2, 67.0], [27.3, 68.0], [27.4, 68.0], [27.5, 68.0], [27.6, 69.0], [27.7, 69.0], [27.8, 69.0], [27.9, 70.0], [28.0, 70.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 73.0], [28.8, 73.0], [28.9, 74.0], [29.0, 74.0], [29.1, 75.0], [29.2, 75.0], [29.3, 76.0], [29.4, 76.0], [29.5, 77.0], [29.6, 77.0], [29.7, 78.0], [29.8, 78.0], [29.9, 79.0], [30.0, 79.0], [30.1, 80.0], [30.2, 80.0], [30.3, 81.0], [30.4, 82.0], [30.5, 82.0], [30.6, 83.0], [30.7, 83.0], [30.8, 84.0], [30.9, 84.0], [31.0, 85.0], [31.1, 85.0], [31.2, 86.0], [31.3, 86.0], [31.4, 87.0], [31.5, 88.0], [31.6, 88.0], [31.7, 89.0], [31.8, 89.0], [31.9, 90.0], [32.0, 90.0], [32.1, 91.0], [32.2, 91.0], [32.3, 91.0], [32.4, 92.0], [32.5, 92.0], [32.6, 93.0], [32.7, 93.0], [32.8, 94.0], [32.9, 94.0], [33.0, 94.0], [33.1, 95.0], [33.2, 95.0], [33.3, 95.0], [33.4, 96.0], [33.5, 96.0], [33.6, 96.0], [33.7, 97.0], [33.8, 97.0], [33.9, 97.0], [34.0, 98.0], [34.1, 98.0], [34.2, 98.0], [34.3, 99.0], [34.4, 99.0], [34.5, 99.0], [34.6, 99.0], [34.7, 100.0], [34.8, 100.0], [34.9, 100.0], [35.0, 101.0], [35.1, 101.0], [35.2, 101.0], [35.3, 101.0], [35.4, 102.0], [35.5, 102.0], [35.6, 102.0], [35.7, 103.0], [35.8, 103.0], [35.9, 103.0], [36.0, 103.0], [36.1, 104.0], [36.2, 104.0], [36.3, 104.0], [36.4, 104.0], [36.5, 105.0], [36.6, 105.0], [36.7, 105.0], [36.8, 105.0], [36.9, 106.0], [37.0, 106.0], [37.1, 106.0], [37.2, 106.0], [37.3, 107.0], [37.4, 107.0], [37.5, 107.0], [37.6, 107.0], [37.7, 108.0], [37.8, 108.0], [37.9, 108.0], [38.0, 108.0], [38.1, 109.0], [38.2, 109.0], [38.3, 109.0], [38.4, 110.0], [38.5, 110.0], [38.6, 110.0], [38.7, 110.0], [38.8, 110.0], [38.9, 111.0], [39.0, 111.0], [39.1, 111.0], [39.2, 111.0], [39.3, 111.0], [39.4, 112.0], [39.5, 112.0], [39.6, 112.0], [39.7, 112.0], [39.8, 113.0], [39.9, 113.0], [40.0, 113.0], [40.1, 113.0], [40.2, 113.0], [40.3, 114.0], [40.4, 114.0], [40.5, 114.0], [40.6, 114.0], [40.7, 115.0], [40.8, 115.0], [40.9, 115.0], [41.0, 115.0], [41.1, 115.0], [41.2, 116.0], [41.3, 116.0], [41.4, 116.0], [41.5, 116.0], [41.6, 116.0], [41.7, 117.0], [41.8, 117.0], [41.9, 117.0], [42.0, 117.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 119.0], [42.7, 119.0], [42.8, 119.0], [42.9, 119.0], [43.0, 120.0], [43.1, 120.0], [43.2, 120.0], [43.3, 120.0], [43.4, 121.0], [43.5, 121.0], [43.6, 121.0], [43.7, 122.0], [43.8, 122.0], [43.9, 122.0], [44.0, 122.0], [44.1, 123.0], [44.2, 123.0], [44.3, 123.0], [44.4, 124.0], [44.5, 124.0], [44.6, 124.0], [44.7, 124.0], [44.8, 125.0], [44.9, 125.0], [45.0, 125.0], [45.1, 126.0], [45.2, 126.0], [45.3, 126.0], [45.4, 127.0], [45.5, 127.0], [45.6, 127.0], [45.7, 128.0], [45.8, 128.0], [45.9, 128.0], [46.0, 128.0], [46.1, 129.0], [46.2, 129.0], [46.3, 129.0], [46.4, 129.0], [46.5, 130.0], [46.6, 130.0], [46.7, 130.0], [46.8, 130.0], [46.9, 130.0], [47.0, 130.0], [47.1, 131.0], [47.2, 131.0], [47.3, 131.0], [47.4, 131.0], [47.5, 131.0], [47.6, 131.0], [47.7, 132.0], [47.8, 132.0], [47.9, 132.0], [48.0, 132.0], [48.1, 132.0], [48.2, 132.0], [48.3, 133.0], [48.4, 133.0], [48.5, 133.0], [48.6, 133.0], [48.7, 133.0], [48.8, 133.0], [48.9, 133.0], [49.0, 134.0], [49.1, 134.0], [49.2, 134.0], [49.3, 134.0], [49.4, 134.0], [49.5, 134.0], [49.6, 134.0], [49.7, 134.0], [49.8, 134.0], [49.9, 135.0], [50.0, 135.0], [50.1, 135.0], [50.2, 135.0], [50.3, 135.0], [50.4, 135.0], [50.5, 135.0], [50.6, 135.0], [50.7, 135.0], [50.8, 136.0], [50.9, 136.0], [51.0, 136.0], [51.1, 136.0], [51.2, 136.0], [51.3, 136.0], [51.4, 136.0], [51.5, 136.0], [51.6, 136.0], [51.7, 136.0], [51.8, 136.0], [51.9, 136.0], [52.0, 137.0], [52.1, 137.0], [52.2, 137.0], [52.3, 137.0], [52.4, 137.0], [52.5, 137.0], [52.6, 137.0], [52.7, 137.0], [52.8, 137.0], [52.9, 137.0], [53.0, 137.0], [53.1, 137.0], [53.2, 137.0], [53.3, 138.0], [53.4, 138.0], [53.5, 138.0], [53.6, 138.0], [53.7, 138.0], [53.8, 138.0], [53.9, 138.0], [54.0, 138.0], [54.1, 138.0], [54.2, 138.0], [54.3, 138.0], [54.4, 138.0], [54.5, 139.0], [54.6, 139.0], [54.7, 139.0], [54.8, 139.0], [54.9, 139.0], [55.0, 139.0], [55.1, 139.0], [55.2, 139.0], [55.3, 139.0], [55.4, 139.0], [55.5, 139.0], [55.6, 139.0], [55.7, 139.0], [55.8, 140.0], [55.9, 140.0], [56.0, 140.0], [56.1, 140.0], [56.2, 140.0], [56.3, 140.0], [56.4, 140.0], [56.5, 140.0], [56.6, 140.0], [56.7, 140.0], [56.8, 140.0], [56.9, 140.0], [57.0, 140.0], [57.1, 140.0], [57.2, 140.0], [57.3, 141.0], [57.4, 141.0], [57.5, 141.0], [57.6, 141.0], [57.7, 141.0], [57.8, 141.0], [57.9, 141.0], [58.0, 141.0], [58.1, 141.0], [58.2, 141.0], [58.3, 141.0], [58.4, 141.0], [58.5, 142.0], [58.6, 142.0], [58.7, 142.0], [58.8, 142.0], [58.9, 142.0], [59.0, 142.0], [59.1, 142.0], [59.2, 142.0], [59.3, 142.0], [59.4, 142.0], [59.5, 142.0], [59.6, 142.0], [59.7, 142.0], [59.8, 142.0], [59.9, 143.0], [60.0, 143.0], [60.1, 143.0], [60.2, 143.0], [60.3, 143.0], [60.4, 143.0], [60.5, 143.0], [60.6, 143.0], [60.7, 143.0], [60.8, 143.0], [60.9, 143.0], [61.0, 143.0], [61.1, 143.0], [61.2, 144.0], [61.3, 144.0], [61.4, 144.0], [61.5, 144.0], [61.6, 144.0], [61.7, 144.0], [61.8, 144.0], [61.9, 144.0], [62.0, 144.0], [62.1, 144.0], [62.2, 144.0], [62.3, 144.0], [62.4, 144.0], [62.5, 145.0], [62.6, 145.0], [62.7, 145.0], [62.8, 145.0], [62.9, 145.0], [63.0, 145.0], [63.1, 145.0], [63.2, 145.0], [63.3, 145.0], [63.4, 145.0], [63.5, 145.0], [63.6, 145.0], [63.7, 146.0], [63.8, 146.0], [63.9, 146.0], [64.0, 146.0], [64.1, 146.0], [64.2, 146.0], [64.3, 146.0], [64.4, 146.0], [64.5, 146.0], [64.6, 146.0], [64.7, 146.0], [64.8, 146.0], [64.9, 147.0], [65.0, 147.0], [65.1, 147.0], [65.2, 147.0], [65.3, 147.0], [65.4, 147.0], [65.5, 147.0], [65.6, 147.0], [65.7, 147.0], [65.8, 147.0], [65.9, 147.0], [66.0, 147.0], [66.1, 148.0], [66.2, 148.0], [66.3, 148.0], [66.4, 148.0], [66.5, 148.0], [66.6, 148.0], [66.7, 148.0], [66.8, 148.0], [66.9, 148.0], [67.0, 149.0], [67.1, 149.0], [67.2, 149.0], [67.3, 149.0], [67.4, 149.0], [67.5, 149.0], [67.6, 149.0], [67.7, 149.0], [67.8, 149.0], [67.9, 149.0], [68.0, 150.0], [68.1, 150.0], [68.2, 150.0], [68.3, 150.0], [68.4, 150.0], [68.5, 150.0], [68.6, 150.0], [68.7, 150.0], [68.8, 150.0], [68.9, 150.0], [69.0, 150.0], [69.1, 151.0], [69.2, 151.0], [69.3, 151.0], [69.4, 151.0], [69.5, 151.0], [69.6, 151.0], [69.7, 151.0], [69.8, 151.0], [69.9, 151.0], [70.0, 152.0], [70.1, 152.0], [70.2, 152.0], [70.3, 152.0], [70.4, 152.0], [70.5, 152.0], [70.6, 152.0], [70.7, 152.0], [70.8, 153.0], [70.9, 153.0], [71.0, 153.0], [71.1, 153.0], [71.2, 153.0], [71.3, 153.0], [71.4, 153.0], [71.5, 153.0], [71.6, 153.0], [71.7, 154.0], [71.8, 154.0], [71.9, 154.0], [72.0, 154.0], [72.1, 154.0], [72.2, 154.0], [72.3, 154.0], [72.4, 154.0], [72.5, 155.0], [72.6, 155.0], [72.7, 155.0], [72.8, 155.0], [72.9, 155.0], [73.0, 155.0], [73.1, 155.0], [73.2, 155.0], [73.3, 155.0], [73.4, 156.0], [73.5, 156.0], [73.6, 156.0], [73.7, 156.0], [73.8, 156.0], [73.9, 156.0], [74.0, 156.0], [74.1, 157.0], [74.2, 157.0], [74.3, 157.0], [74.4, 157.0], [74.5, 157.0], [74.6, 157.0], [74.7, 157.0], [74.8, 157.0], [74.9, 158.0], [75.0, 158.0], [75.1, 158.0], [75.2, 158.0], [75.3, 158.0], [75.4, 158.0], [75.5, 158.0], [75.6, 158.0], [75.7, 159.0], [75.8, 159.0], [75.9, 159.0], [76.0, 159.0], [76.1, 159.0], [76.2, 159.0], [76.3, 159.0], [76.4, 160.0], [76.5, 160.0], [76.6, 160.0], [76.7, 160.0], [76.8, 160.0], [76.9, 160.0], [77.0, 160.0], [77.1, 160.0], [77.2, 161.0], [77.3, 161.0], [77.4, 161.0], [77.5, 161.0], [77.6, 161.0], [77.7, 161.0], [77.8, 161.0], [77.9, 162.0], [78.0, 162.0], [78.1, 162.0], [78.2, 162.0], [78.3, 162.0], [78.4, 162.0], [78.5, 162.0], [78.6, 163.0], [78.7, 163.0], [78.8, 163.0], [78.9, 163.0], [79.0, 163.0], [79.1, 163.0], [79.2, 163.0], [79.3, 164.0], [79.4, 164.0], [79.5, 164.0], [79.6, 164.0], [79.7, 164.0], [79.8, 164.0], [79.9, 165.0], [80.0, 165.0], [80.1, 165.0], [80.2, 165.0], [80.3, 165.0], [80.4, 165.0], [80.5, 165.0], [80.6, 165.0], [80.7, 165.0], [80.8, 166.0], [80.9, 166.0], [81.0, 166.0], [81.1, 166.0], [81.2, 166.0], [81.3, 167.0], [81.4, 167.0], [81.5, 167.0], [81.6, 167.0], [81.7, 167.0], [81.8, 167.0], [81.9, 167.0], [82.0, 168.0], [82.1, 168.0], [82.2, 168.0], [82.3, 168.0], [82.4, 168.0], [82.5, 168.0], [82.6, 169.0], [82.7, 169.0], [82.8, 169.0], [82.9, 169.0], [83.0, 169.0], [83.1, 169.0], [83.2, 170.0], [83.3, 170.0], [83.4, 170.0], [83.5, 170.0], [83.6, 170.0], [83.7, 170.0], [83.8, 171.0], [83.9, 171.0], [84.0, 171.0], [84.1, 171.0], [84.2, 171.0], [84.3, 172.0], [84.4, 172.0], [84.5, 172.0], [84.6, 172.0], [84.7, 172.0], [84.8, 173.0], [84.9, 173.0], [85.0, 173.0], [85.1, 173.0], [85.2, 173.0], [85.3, 174.0], [85.4, 174.0], [85.5, 174.0], [85.6, 175.0], [85.7, 175.0], [85.8, 175.0], [85.9, 175.0], [86.0, 175.0], [86.1, 176.0], [86.2, 176.0], [86.3, 176.0], [86.4, 176.0], [86.5, 176.0], [86.6, 177.0], [86.7, 177.0], [86.8, 177.0], [86.9, 177.0], [87.0, 177.0], [87.1, 178.0], [87.2, 178.0], [87.3, 178.0], [87.4, 178.0], [87.5, 178.0], [87.6, 179.0], [87.7, 179.0], [87.8, 179.0], [87.9, 179.0], [88.0, 180.0], [88.1, 180.0], [88.2, 180.0], [88.3, 180.0], [88.4, 180.0], [88.5, 181.0], [88.6, 181.0], [88.7, 181.0], [88.8, 181.0], [88.9, 182.0], [89.0, 182.0], [89.1, 182.0], [89.2, 182.0], [89.3, 183.0], [89.4, 183.0], [89.5, 183.0], [89.6, 183.0], [89.7, 184.0], [89.8, 184.0], [89.9, 184.0], [90.0, 184.0], [90.1, 185.0], [90.2, 185.0], [90.3, 185.0], [90.4, 186.0], [90.5, 186.0], [90.6, 186.0], [90.7, 187.0], [90.8, 187.0], [90.9, 187.0], [91.0, 187.0], [91.1, 188.0], [91.2, 188.0], [91.3, 188.0], [91.4, 188.0], [91.5, 189.0], [91.6, 189.0], [91.7, 189.0], [91.8, 189.0], [91.9, 190.0], [92.0, 190.0], [92.1, 190.0], [92.2, 191.0], [92.3, 191.0], [92.4, 191.0], [92.5, 192.0], [92.6, 192.0], [92.7, 192.0], [92.8, 192.0], [92.9, 193.0], [93.0, 193.0], [93.1, 193.0], [93.2, 193.0], [93.3, 194.0], [93.4, 194.0], [93.5, 194.0], [93.6, 195.0], [93.7, 195.0], [93.8, 195.0], [93.9, 196.0], [94.0, 196.0], [94.1, 196.0], [94.2, 197.0], [94.3, 197.0], [94.4, 197.0], [94.5, 198.0], [94.6, 198.0], [94.7, 199.0], [94.8, 199.0], [94.9, 199.0], [95.0, 200.0], [95.1, 200.0], [95.2, 200.0], [95.3, 201.0], [95.4, 201.0], [95.5, 202.0], [95.6, 202.0], [95.7, 203.0], [95.8, 203.0], [95.9, 204.0], [96.0, 204.0], [96.1, 205.0], [96.2, 205.0], [96.3, 206.0], [96.4, 207.0], [96.5, 207.0], [96.6, 208.0], [96.7, 208.0], [96.8, 209.0], [96.9, 210.0], [97.0, 210.0], [97.1, 211.0], [97.2, 212.0], [97.3, 213.0], [97.4, 214.0], [97.5, 214.0], [97.6, 215.0], [97.7, 216.0], [97.8, 217.0], [97.9, 218.0], [98.0, 219.0], [98.1, 220.0], [98.2, 221.0], [98.3, 222.0], [98.4, 224.0], [98.5, 225.0], [98.6, 227.0], [98.7, 229.0], [98.8, 231.0], [98.9, 233.0], [99.0, 235.0], [99.1, 238.0], [99.2, 240.0], [99.3, 245.0], [99.4, 250.0], [99.5, 253.0], [99.6, 258.0], [99.7, 263.0], [99.8, 270.0], [99.9, 285.0]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23463.0, "series": [{"data": [[0.0, 13464.0], [300.0, 1.0], [100.0, 23463.0], [200.0, 1975.0]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38903.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 38903.0, "series": [{"data": [[0.0, 38903.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.276748582230626, "minX": 1.698524275E12, "maxY": 100.0, "series": [{"data": [[1.698524305E12, 100.0], [1.698524285E12, 41.385664682539755], [1.69852433E12, 100.0], [1.6985243E12, 90.88312480927668], [1.69852428E12, 24.730915546538213], [1.698524325E12, 100.0], [1.698524315E12, 100.0], [1.698524295E12, 75.08038786362219], [1.698524275E12, 10.276748582230626], [1.69852432E12, 100.0], [1.69852431E12, 100.0], [1.69852429E12, 57.46809854706249], [1.698524335E12, 84.74050632911397]], "isOverall": false, "label": "MinimalMeet-dotnet", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698524335E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.71304347826087, "minX": 1.0, "maxY": 206.32608695652164, "series": [{"data": [[2.0, 16.341463414634152], [3.0, 10.846938775510205], [4.0, 9.71304347826087], [5.0, 10.676691729323311], [6.0, 12.836477987421377], [7.0, 11.951515151515153], [8.0, 13.838323353293411], [9.0, 14.876847290640397], [10.0, 13.980487804878049], [11.0, 15.009302325581395], [12.0, 14.858333333333324], [13.0, 16.297413793103445], [14.0, 18.100386100386107], [15.0, 19.56950672645739], [16.0, 17.98850574712643], [17.0, 21.56734693877551], [18.0, 29.76111111111111], [19.0, 28.15577889447237], [20.0, 23.82142857142857], [21.0, 26.76855895196507], [22.0, 26.56877323420073], [23.0, 24.19572953736653], [24.0, 30.14529914529915], [25.0, 39.17085427135676], [26.0, 30.581673306772906], [27.0, 32.431451612903274], [28.0, 36.8942731277533], [29.0, 33.173745173745196], [30.0, 41.004273504273506], [31.0, 37.06995884773662], [32.0, 38.08846153846156], [33.0, 40.02880658436213], [34.0, 50.67164179104477], [35.0, 43.338983050847446], [36.0, 42.65882352941174], [37.0, 47.65065502183404], [38.0, 51.772925764192145], [39.0, 51.772321428571416], [40.0, 46.134099616858244], [41.0, 54.320175438596515], [42.0, 52.38775510204085], [43.0, 50.42063492063492], [44.0, 51.91699604743078], [45.0, 52.4938775510204], [46.0, 53.48920863309351], [47.0, 49.25174825174827], [48.0, 57.147679324894504], [49.0, 68.61711711711712], [50.0, 65.81938325991192], [51.0, 72.16513761467893], [52.0, 83.0444444444444], [53.0, 72.94392523364492], [54.0, 75.05829596412552], [55.0, 83.74742268041238], [56.0, 83.92500000000001], [57.0, 85.70854271356787], [58.0, 95.05434782608698], [59.0, 87.4527363184079], [60.0, 95.15384615384619], [61.0, 103.77094972067036], [62.0, 113.81656804733731], [63.0, 97.13020833333334], [64.0, 95.32571428571428], [65.0, 147.62318840579712], [66.0, 124.40606060606055], [67.0, 112.44324324324323], [68.0, 156.45669291338584], [69.0, 140.91729323308266], [70.0, 134.01714285714291], [71.0, 107.8325123152709], [72.0, 109.68421052631577], [73.0, 102.04845814977978], [74.0, 103.57211538461542], [75.0, 115.76258992805757], [76.0, 135.07657657657666], [77.0, 105.50480769230766], [78.0, 114.04807692307686], [79.0, 115.37073170731709], [80.0, 104.85106382978725], [81.0, 113.59523809523819], [82.0, 117.87499999999996], [83.0, 116.40740740740745], [84.0, 113.19230769230771], [85.0, 123.91666666666669], [86.0, 118.0622222222223], [87.0, 111.4622222222222], [88.0, 123.8254716981132], [89.0, 137.4897959183674], [90.0, 144.6363636363636], [91.0, 134.30208333333337], [92.0, 137.05882352941182], [93.0, 139.93203883495156], [94.0, 144.5989304812835], [95.0, 164.07602339181284], [96.0, 150.08040201005022], [97.0, 161.31460674157304], [98.0, 140.42523364485982], [99.0, 206.32608695652164], [100.0, 163.2721638372403], [1.0, 114.0]], "isOverall": false, "label": "POST /meetings", "isController": false}, {"data": [[73.79484872631853, 116.01125877181738]], "isOverall": false, "label": "POST /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9922.4, "minX": 1.698524275E12, "maxY": 248371.2, "series": [{"data": [[1.698524305E12, 93509.2], [1.698524285E12, 125922.8], [1.69852433E12, 108895.2], [1.6985243E12, 102897.8], [1.69852428E12, 123021.6], [1.698524325E12, 95142.0], [1.698524315E12, 96680.6], [1.698524295E12, 100385.8], [1.698524275E12, 82303.2], [1.69852432E12, 92630.0], [1.69852431E12, 88610.8], [1.69852429E12, 99412.4], [1.698524335E12, 9922.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.698524305E12, 183444.8], [1.698524285E12, 248371.2], [1.69852433E12, 213628.8], [1.6985243E12, 201863.2], [1.69852428E12, 242888.8], [1.698524325E12, 186648.0], [1.698524315E12, 189666.4], [1.698524295E12, 196935.2], [1.698524275E12, 162932.0], [1.69852432E12, 181720.0], [1.69852431E12, 173835.2], [1.69852429E12, 195025.6], [1.698524335E12, 19465.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698524335E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14.430245746691845, "minX": 1.698524275E12, "maxY": 176.79766123316804, "series": [{"data": [[1.698524305E12, 168.22364002686393], [1.698524285E12, 50.65376984126975], [1.69852433E12, 144.1017877739328], [1.6985243E12, 137.9734513274339], [1.69852428E12, 30.774537154450865], [1.698524325E12, 165.05313531353198], [1.698524315E12, 161.58687885677162], [1.698524295E12, 116.0681889271191], [1.698524275E12, 14.430245746691845], [1.69852432E12, 169.53830508474547], [1.69852431E12, 176.79766123316804], [1.69852429E12, 90.55843335439054], [1.698524335E12, 133.25316455696216]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698524335E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14.429111531190928, "minX": 1.698524275E12, "maxY": 176.79766123316804, "series": [{"data": [[1.698524305E12, 168.22364002686393], [1.698524285E12, 50.653273809523746], [1.69852433E12, 144.1017877739328], [1.6985243E12, 137.9728410131217], [1.69852428E12, 30.774283540451414], [1.698524325E12, 165.0528052805283], [1.698524315E12, 161.58687885677162], [1.698524295E12, 116.06787613387556], [1.698524275E12, 14.429111531190928], [1.69852432E12, 169.5376271186444], [1.69852431E12, 176.79766123316804], [1.69852429E12, 90.55811749842057], [1.698524335E12, 133.25316455696216]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698524335E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1024305555555545, "minX": 1.698524275E12, "maxY": 1.3929836995038969, "series": [{"data": [[1.698524305E12, 1.3713901947615867], [1.698524285E12, 1.1024305555555545], [1.69852433E12, 1.3584198385236466], [1.6985243E12, 1.3759536161122992], [1.69852428E12, 1.1275678417448642], [1.698524325E12, 1.3607260726072599], [1.698524315E12, 1.3926599545306915], [1.698524295E12, 1.3550203315608373], [1.698524275E12, 1.1954631379962202], [1.69852432E12, 1.3918644067796617], [1.69852431E12, 1.3929836995038969], [1.69852429E12, 1.3654453569172456], [1.698524335E12, 1.3481012658227847]], "isOverall": false, "label": "POST /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698524335E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.698524275E12, "maxY": 301.0, "series": [{"data": [[1.698524305E12, 247.0], [1.698524285E12, 97.0], [1.69852433E12, 183.0], [1.6985243E12, 265.0], [1.69852428E12, 69.0], [1.698524325E12, 297.0], [1.698524315E12, 249.0], [1.698524295E12, 229.0], [1.698524275E12, 301.0], [1.69852432E12, 274.0], [1.69852431E12, 299.0], [1.69852429E12, 193.0], [1.698524335E12, 149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.698524305E12, 122.0], [1.698524285E12, 31.0], [1.69852433E12, 123.0], [1.6985243E12, 101.0], [1.69852428E12, 11.0], [1.698524325E12, 113.0], [1.698524315E12, 118.0], [1.698524295E12, 84.0], [1.698524275E12, 7.0], [1.69852432E12, 119.0], [1.69852431E12, 128.0], [1.69852429E12, 57.0], [1.698524335E12, 111.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.698524305E12, 200.0999999999999], [1.698524285E12, 64.0], [1.69852433E12, 156.0], [1.6985243E12, 166.0], [1.69852428E12, 41.0], [1.698524325E12, 201.0], [1.698524315E12, 190.0], [1.698524295E12, 137.0], [1.698524275E12, 19.0], [1.69852432E12, 209.0], [1.69852431E12, 214.0], [1.69852429E12, 120.0], [1.698524335E12, 142.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.698524305E12, 229.42000000000007], [1.698524285E12, 76.0], [1.69852433E12, 175.0], [1.6985243E12, 236.2199999999998], [1.69852428E12, 58.0], [1.698524325E12, 259.69000000000005], [1.698524315E12, 231.0], [1.698524295E12, 213.0], [1.698524275E12, 26.0], [1.69852432E12, 253.0], [1.69852431E12, 279.53999999999996], [1.69852429E12, 178.65999999999985], [1.698524335E12, 147.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.698524305E12, 164.0], [1.698524285E12, 49.0], [1.69852433E12, 143.0], [1.6985243E12, 135.0], [1.69852428E12, 29.0], [1.698524325E12, 158.0], [1.698524315E12, 159.0], [1.698524295E12, 111.0], [1.698524275E12, 14.0], [1.69852432E12, 166.0], [1.69852431E12, 172.0], [1.69852429E12, 87.0], [1.698524335E12, 135.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.698524305E12, 213.0], [1.698524285E12, 69.0], [1.69852433E12, 163.0], [1.6985243E12, 184.0], [1.69852428E12, 49.0], [1.698524325E12, 214.0], [1.698524315E12, 201.0], [1.698524295E12, 165.0], [1.698524275E12, 21.0], [1.69852432E12, 222.0], [1.69852431E12, 231.0], [1.69852429E12, 135.64999999999964], [1.698524335E12, 144.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698524335E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 76.0, "maxY": 193.0, "series": [{"data": [[539.0, 187.0], [523.0, 192.0], [516.0, 186.0], [534.0, 193.0], [551.0, 105.0], [557.0, 183.0], [562.0, 179.0], [548.0, 186.0], [550.0, 170.0], [589.0, 13.0], [592.0, 101.0], [585.0, 146.0], [580.0, 166.0], [576.0, 170.0], [595.0, 167.0], [605.0, 163.0], [639.0, 111.0], [623.0, 150.0], [628.0, 160.0], [612.0, 173.0], [622.0, 141.5], [634.0, 154.5], [641.0, 89.0], [643.0, 102.0], [657.0, 138.0], [642.0, 154.0], [652.0, 149.0], [664.0, 149.0], [671.0, 144.0], [654.0, 152.0], [701.0, 70.0], [703.0, 93.5], [681.0, 79.0], [698.0, 111.0], [672.0, 149.0], [689.0, 146.0], [693.0, 144.0], [697.0, 144.0], [696.0, 143.0], [735.0, 14.0], [718.0, 128.0], [707.0, 118.0], [705.0, 119.0], [783.0, 29.0], [778.0, 42.0], [769.0, 48.0], [818.0, 17.0], [813.0, 32.0], [807.0, 37.0], [815.0, 49.0], [829.0, 54.0], [837.0, 25.0], [841.0, 52.0], [76.0, 9.0], [316.0, 135.0], [427.0, 10.0], [485.0, 186.0], [499.0, 125.0], [510.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 841.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 76.0, "maxY": 193.0, "series": [{"data": [[539.0, 187.0], [523.0, 192.0], [516.0, 186.0], [534.0, 193.0], [551.0, 105.0], [557.0, 183.0], [562.0, 179.0], [548.0, 186.0], [550.0, 170.0], [589.0, 13.0], [592.0, 101.0], [585.0, 146.0], [580.0, 166.0], [576.0, 170.0], [595.0, 167.0], [605.0, 163.0], [639.0, 111.0], [623.0, 150.0], [628.0, 160.0], [612.0, 173.0], [622.0, 141.5], [634.0, 154.5], [641.0, 89.0], [643.0, 102.0], [657.0, 138.0], [642.0, 154.0], [652.0, 149.0], [664.0, 149.0], [671.0, 144.0], [654.0, 152.0], [701.0, 70.0], [703.0, 93.5], [681.0, 79.0], [698.0, 111.0], [672.0, 149.0], [689.0, 146.0], [693.0, 144.0], [697.0, 144.0], [696.0, 143.0], [735.0, 14.0], [718.0, 128.0], [707.0, 118.0], [705.0, 119.0], [783.0, 29.0], [778.0, 42.0], [769.0, 48.0], [818.0, 17.0], [813.0, 32.0], [807.0, 37.0], [815.0, 49.0], [829.0, 54.0], [837.0, 25.0], [841.0, 52.0], [76.0, 9.0], [316.0, 135.0], [427.0, 10.0], [485.0, 186.0], [499.0, 125.0], [510.0, 183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 841.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 43.2, "minX": 1.698524275E12, "maxY": 809.8, "series": [{"data": [[1.698524305E12, 595.6], [1.698524285E12, 809.8], [1.69852433E12, 693.6], [1.6985243E12, 659.0], [1.69852428E12, 792.0], [1.698524325E12, 606.0], [1.698524315E12, 615.8], [1.698524295E12, 642.6], [1.698524275E12, 532.2], [1.69852432E12, 590.0], [1.69852431E12, 564.4], [1.69852429E12, 636.4], [1.698524335E12, 43.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698524335E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 63.2, "minX": 1.698524275E12, "maxY": 806.4, "series": [{"data": [[1.698524305E12, 595.6], [1.698524285E12, 806.4], [1.69852433E12, 693.6], [1.6985243E12, 655.4], [1.69852428E12, 788.6], [1.698524325E12, 606.0], [1.698524315E12, 615.8], [1.698524295E12, 639.4], [1.698524275E12, 529.0], [1.69852432E12, 590.0], [1.69852431E12, 564.4], [1.69852429E12, 633.2], [1.698524335E12, 63.2]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.698524335E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 63.2, "minX": 1.698524275E12, "maxY": 806.4, "series": [{"data": [[1.698524305E12, 595.6], [1.698524285E12, 806.4], [1.69852433E12, 693.6], [1.6985243E12, 655.4], [1.69852428E12, 788.6], [1.698524325E12, 606.0], [1.698524315E12, 615.8], [1.698524295E12, 639.4], [1.698524275E12, 529.0], [1.69852432E12, 590.0], [1.69852431E12, 564.4], [1.69852429E12, 633.2], [1.698524335E12, 63.2]], "isOverall": false, "label": "POST /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698524335E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 63.2, "minX": 1.698524275E12, "maxY": 806.4, "series": [{"data": [[1.698524305E12, 595.6], [1.698524285E12, 806.4], [1.69852433E12, 693.6], [1.6985243E12, 655.4], [1.69852428E12, 788.6], [1.698524325E12, 606.0], [1.698524315E12, 615.8], [1.698524295E12, 639.4], [1.698524275E12, 529.0], [1.69852432E12, 590.0], [1.69852431E12, 564.4], [1.69852429E12, 633.2], [1.698524335E12, 63.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.698524335E12, "title": "Total Transactions Per Second"}},
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

