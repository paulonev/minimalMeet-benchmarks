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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 268.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 6.0], [0.5, 6.0], [0.6, 7.0], [0.7, 8.0], [0.8, 8.0], [0.9, 9.0], [1.0, 9.0], [1.1, 9.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 11.0], [1.6, 11.0], [1.7, 11.0], [1.8, 12.0], [1.9, 12.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 14.0], [2.5, 14.0], [2.6, 15.0], [2.7, 15.0], [2.8, 15.0], [2.9, 16.0], [3.0, 16.0], [3.1, 16.0], [3.2, 17.0], [3.3, 17.0], [3.4, 17.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 19.0], [4.3, 20.0], [4.4, 20.0], [4.5, 20.0], [4.6, 20.0], [4.7, 20.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 21.0], [5.3, 21.0], [5.4, 22.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 22.0], [5.9, 23.0], [6.0, 23.0], [6.1, 23.0], [6.2, 23.0], [6.3, 23.0], [6.4, 23.0], [6.5, 24.0], [6.6, 24.0], [6.7, 24.0], [6.8, 24.0], [6.9, 24.0], [7.0, 25.0], [7.1, 25.0], [7.2, 25.0], [7.3, 25.0], [7.4, 25.0], [7.5, 25.0], [7.6, 26.0], [7.7, 26.0], [7.8, 26.0], [7.9, 26.0], [8.0, 27.0], [8.1, 27.0], [8.2, 27.0], [8.3, 27.0], [8.4, 27.0], [8.5, 27.0], [8.6, 28.0], [8.7, 28.0], [8.8, 28.0], [8.9, 28.0], [9.0, 28.0], [9.1, 29.0], [9.2, 29.0], [9.3, 29.0], [9.4, 29.0], [9.5, 29.0], [9.6, 30.0], [9.7, 30.0], [9.8, 30.0], [9.9, 30.0], [10.0, 31.0], [10.1, 31.0], [10.2, 31.0], [10.3, 31.0], [10.4, 31.0], [10.5, 32.0], [10.6, 32.0], [10.7, 32.0], [10.8, 32.0], [10.9, 33.0], [11.0, 33.0], [11.1, 33.0], [11.2, 33.0], [11.3, 34.0], [11.4, 34.0], [11.5, 34.0], [11.6, 34.0], [11.7, 34.0], [11.8, 35.0], [11.9, 35.0], [12.0, 35.0], [12.1, 35.0], [12.2, 35.0], [12.3, 36.0], [12.4, 36.0], [12.5, 36.0], [12.6, 37.0], [12.7, 37.0], [12.8, 37.0], [12.9, 37.0], [13.0, 38.0], [13.1, 38.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 40.0], [13.6, 40.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 42.0], [14.1, 42.0], [14.2, 43.0], [14.3, 43.0], [14.4, 44.0], [14.5, 44.0], [14.6, 44.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 46.0], [15.1, 46.0], [15.2, 46.0], [15.3, 46.0], [15.4, 47.0], [15.5, 47.0], [15.6, 47.0], [15.7, 47.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 50.0], [17.1, 50.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 55.0], [19.5, 55.0], [19.6, 55.0], [19.7, 55.0], [19.8, 56.0], [19.9, 56.0], [20.0, 56.0], [20.1, 56.0], [20.2, 56.0], [20.3, 57.0], [20.4, 57.0], [20.5, 57.0], [20.6, 57.0], [20.7, 57.0], [20.8, 58.0], [20.9, 58.0], [21.0, 58.0], [21.1, 58.0], [21.2, 59.0], [21.3, 59.0], [21.4, 59.0], [21.5, 59.0], [21.6, 60.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 61.0], [22.1, 61.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 62.0], [22.6, 62.0], [22.7, 62.0], [22.8, 63.0], [22.9, 63.0], [23.0, 63.0], [23.1, 63.0], [23.2, 64.0], [23.3, 64.0], [23.4, 64.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 66.0], [24.0, 66.0], [24.1, 66.0], [24.2, 66.0], [24.3, 67.0], [24.4, 67.0], [24.5, 67.0], [24.6, 67.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 70.0], [25.7, 70.0], [25.8, 70.0], [25.9, 70.0], [26.0, 71.0], [26.1, 71.0], [26.2, 71.0], [26.3, 71.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 74.0], [27.1, 74.0], [27.2, 74.0], [27.3, 74.0], [27.4, 75.0], [27.5, 75.0], [27.6, 75.0], [27.7, 76.0], [27.8, 76.0], [27.9, 76.0], [28.0, 76.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 79.0], [29.5, 80.0], [29.6, 80.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 80.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 82.0], [30.7, 82.0], [30.8, 82.0], [30.9, 82.0], [31.0, 82.0], [31.1, 83.0], [31.2, 83.0], [31.3, 83.0], [31.4, 83.0], [31.5, 84.0], [31.6, 84.0], [31.7, 84.0], [31.8, 84.0], [31.9, 85.0], [32.0, 85.0], [32.1, 85.0], [32.2, 85.0], [32.3, 86.0], [32.4, 86.0], [32.5, 86.0], [32.6, 86.0], [32.7, 87.0], [32.8, 87.0], [32.9, 87.0], [33.0, 87.0], [33.1, 87.0], [33.2, 88.0], [33.3, 88.0], [33.4, 88.0], [33.5, 88.0], [33.6, 89.0], [33.7, 89.0], [33.8, 89.0], [33.9, 89.0], [34.0, 89.0], [34.1, 90.0], [34.2, 90.0], [34.3, 90.0], [34.4, 90.0], [34.5, 91.0], [34.6, 91.0], [34.7, 91.0], [34.8, 91.0], [34.9, 91.0], [35.0, 92.0], [35.1, 92.0], [35.2, 92.0], [35.3, 92.0], [35.4, 93.0], [35.5, 93.0], [35.6, 93.0], [35.7, 93.0], [35.8, 93.0], [35.9, 93.0], [36.0, 94.0], [36.1, 94.0], [36.2, 94.0], [36.3, 94.0], [36.4, 94.0], [36.5, 95.0], [36.6, 95.0], [36.7, 95.0], [36.8, 95.0], [36.9, 95.0], [37.0, 95.0], [37.1, 96.0], [37.2, 96.0], [37.3, 96.0], [37.4, 96.0], [37.5, 96.0], [37.6, 96.0], [37.7, 96.0], [37.8, 97.0], [37.9, 97.0], [38.0, 97.0], [38.1, 97.0], [38.2, 97.0], [38.3, 97.0], [38.4, 98.0], [38.5, 98.0], [38.6, 98.0], [38.7, 98.0], [38.8, 98.0], [38.9, 98.0], [39.0, 98.0], [39.1, 99.0], [39.2, 99.0], [39.3, 99.0], [39.4, 99.0], [39.5, 99.0], [39.6, 99.0], [39.7, 99.0], [39.8, 99.0], [39.9, 100.0], [40.0, 100.0], [40.1, 100.0], [40.2, 100.0], [40.3, 100.0], [40.4, 100.0], [40.5, 101.0], [40.6, 101.0], [40.7, 101.0], [40.8, 101.0], [40.9, 101.0], [41.0, 101.0], [41.1, 102.0], [41.2, 102.0], [41.3, 102.0], [41.4, 102.0], [41.5, 103.0], [41.6, 103.0], [41.7, 103.0], [41.8, 103.0], [41.9, 104.0], [42.0, 104.0], [42.1, 104.0], [42.2, 104.0], [42.3, 104.0], [42.4, 105.0], [42.5, 105.0], [42.6, 105.0], [42.7, 105.0], [42.8, 105.0], [42.9, 106.0], [43.0, 106.0], [43.1, 106.0], [43.2, 106.0], [43.3, 107.0], [43.4, 107.0], [43.5, 107.0], [43.6, 107.0], [43.7, 107.0], [43.8, 108.0], [43.9, 108.0], [44.0, 108.0], [44.1, 108.0], [44.2, 109.0], [44.3, 109.0], [44.4, 109.0], [44.5, 109.0], [44.6, 110.0], [44.7, 110.0], [44.8, 110.0], [44.9, 110.0], [45.0, 110.0], [45.1, 111.0], [45.2, 111.0], [45.3, 111.0], [45.4, 112.0], [45.5, 112.0], [45.6, 113.0], [45.7, 113.0], [45.8, 113.0], [45.9, 114.0], [46.0, 114.0], [46.1, 115.0], [46.2, 115.0], [46.3, 115.0], [46.4, 116.0], [46.5, 116.0], [46.6, 116.0], [46.7, 117.0], [46.8, 118.0], [46.9, 119.0], [47.0, 120.0], [47.1, 121.0], [47.2, 123.0], [47.3, 125.0], [47.4, 127.0], [47.5, 130.0], [47.6, 133.0], [47.7, 135.0], [47.8, 136.0], [47.9, 137.0], [48.0, 138.0], [48.1, 139.0], [48.2, 139.0], [48.3, 140.0], [48.4, 140.0], [48.5, 141.0], [48.6, 141.0], [48.7, 141.0], [48.8, 142.0], [48.9, 142.0], [49.0, 142.0], [49.1, 143.0], [49.2, 143.0], [49.3, 143.0], [49.4, 143.0], [49.5, 143.0], [49.6, 144.0], [49.7, 144.0], [49.8, 144.0], [49.9, 144.0], [50.0, 144.0], [50.1, 145.0], [50.2, 145.0], [50.3, 145.0], [50.4, 145.0], [50.5, 145.0], [50.6, 146.0], [50.7, 146.0], [50.8, 146.0], [50.9, 146.0], [51.0, 146.0], [51.1, 146.0], [51.2, 146.0], [51.3, 146.0], [51.4, 146.0], [51.5, 147.0], [51.6, 147.0], [51.7, 147.0], [51.8, 147.0], [51.9, 147.0], [52.0, 147.0], [52.1, 147.0], [52.2, 147.0], [52.3, 148.0], [52.4, 148.0], [52.5, 148.0], [52.6, 148.0], [52.7, 148.0], [52.8, 148.0], [52.9, 148.0], [53.0, 148.0], [53.1, 148.0], [53.2, 149.0], [53.3, 149.0], [53.4, 149.0], [53.5, 149.0], [53.6, 149.0], [53.7, 149.0], [53.8, 149.0], [53.9, 149.0], [54.0, 149.0], [54.1, 150.0], [54.2, 150.0], [54.3, 150.0], [54.4, 150.0], [54.5, 150.0], [54.6, 150.0], [54.7, 150.0], [54.8, 150.0], [54.9, 150.0], [55.0, 150.0], [55.1, 150.0], [55.2, 150.0], [55.3, 151.0], [55.4, 151.0], [55.5, 151.0], [55.6, 151.0], [55.7, 151.0], [55.8, 151.0], [55.9, 151.0], [56.0, 151.0], [56.1, 151.0], [56.2, 151.0], [56.3, 151.0], [56.4, 152.0], [56.5, 152.0], [56.6, 152.0], [56.7, 152.0], [56.8, 152.0], [56.9, 152.0], [57.0, 152.0], [57.1, 152.0], [57.2, 152.0], [57.3, 152.0], [57.4, 152.0], [57.5, 153.0], [57.6, 153.0], [57.7, 153.0], [57.8, 153.0], [57.9, 153.0], [58.0, 153.0], [58.1, 153.0], [58.2, 153.0], [58.3, 153.0], [58.4, 153.0], [58.5, 153.0], [58.6, 154.0], [58.7, 154.0], [58.8, 154.0], [58.9, 154.0], [59.0, 154.0], [59.1, 154.0], [59.2, 154.0], [59.3, 154.0], [59.4, 154.0], [59.5, 154.0], [59.6, 155.0], [59.7, 155.0], [59.8, 155.0], [59.9, 155.0], [60.0, 155.0], [60.1, 155.0], [60.2, 155.0], [60.3, 155.0], [60.4, 155.0], [60.5, 155.0], [60.6, 155.0], [60.7, 156.0], [60.8, 156.0], [60.9, 156.0], [61.0, 156.0], [61.1, 156.0], [61.2, 156.0], [61.3, 156.0], [61.4, 156.0], [61.5, 156.0], [61.6, 156.0], [61.7, 156.0], [61.8, 156.0], [61.9, 156.0], [62.0, 157.0], [62.1, 157.0], [62.2, 157.0], [62.3, 157.0], [62.4, 157.0], [62.5, 157.0], [62.6, 157.0], [62.7, 157.0], [62.8, 157.0], [62.9, 157.0], [63.0, 157.0], [63.1, 157.0], [63.2, 157.0], [63.3, 157.0], [63.4, 158.0], [63.5, 158.0], [63.6, 158.0], [63.7, 158.0], [63.8, 158.0], [63.9, 158.0], [64.0, 158.0], [64.1, 158.0], [64.2, 158.0], [64.3, 158.0], [64.4, 158.0], [64.5, 158.0], [64.6, 158.0], [64.7, 159.0], [64.8, 159.0], [64.9, 159.0], [65.0, 159.0], [65.1, 159.0], [65.2, 159.0], [65.3, 159.0], [65.4, 159.0], [65.5, 159.0], [65.6, 159.0], [65.7, 159.0], [65.8, 159.0], [65.9, 159.0], [66.0, 160.0], [66.1, 160.0], [66.2, 160.0], [66.3, 160.0], [66.4, 160.0], [66.5, 160.0], [66.6, 160.0], [66.7, 160.0], [66.8, 160.0], [66.9, 160.0], [67.0, 160.0], [67.1, 160.0], [67.2, 160.0], [67.3, 161.0], [67.4, 161.0], [67.5, 161.0], [67.6, 161.0], [67.7, 161.0], [67.8, 161.0], [67.9, 161.0], [68.0, 161.0], [68.1, 161.0], [68.2, 161.0], [68.3, 161.0], [68.4, 161.0], [68.5, 161.0], [68.6, 162.0], [68.7, 162.0], [68.8, 162.0], [68.9, 162.0], [69.0, 162.0], [69.1, 162.0], [69.2, 162.0], [69.3, 162.0], [69.4, 162.0], [69.5, 162.0], [69.6, 162.0], [69.7, 162.0], [69.8, 162.0], [69.9, 163.0], [70.0, 163.0], [70.1, 163.0], [70.2, 163.0], [70.3, 163.0], [70.4, 163.0], [70.5, 163.0], [70.6, 163.0], [70.7, 163.0], [70.8, 163.0], [70.9, 163.0], [71.0, 163.0], [71.1, 163.0], [71.2, 163.0], [71.3, 164.0], [71.4, 164.0], [71.5, 164.0], [71.6, 164.0], [71.7, 164.0], [71.8, 164.0], [71.9, 164.0], [72.0, 164.0], [72.1, 164.0], [72.2, 164.0], [72.3, 164.0], [72.4, 165.0], [72.5, 165.0], [72.6, 165.0], [72.7, 165.0], [72.8, 165.0], [72.9, 165.0], [73.0, 165.0], [73.1, 165.0], [73.2, 165.0], [73.3, 165.0], [73.4, 165.0], [73.5, 165.0], [73.6, 165.0], [73.7, 166.0], [73.8, 166.0], [73.9, 166.0], [74.0, 166.0], [74.1, 166.0], [74.2, 166.0], [74.3, 166.0], [74.4, 166.0], [74.5, 166.0], [74.6, 166.0], [74.7, 166.0], [74.8, 166.0], [74.9, 166.0], [75.0, 167.0], [75.1, 167.0], [75.2, 167.0], [75.3, 167.0], [75.4, 167.0], [75.5, 167.0], [75.6, 167.0], [75.7, 167.0], [75.8, 167.0], [75.9, 167.0], [76.0, 167.0], [76.1, 167.0], [76.2, 168.0], [76.3, 168.0], [76.4, 168.0], [76.5, 168.0], [76.6, 168.0], [76.7, 168.0], [76.8, 168.0], [76.9, 168.0], [77.0, 168.0], [77.1, 168.0], [77.2, 168.0], [77.3, 168.0], [77.4, 169.0], [77.5, 169.0], [77.6, 169.0], [77.7, 169.0], [77.8, 169.0], [77.9, 169.0], [78.0, 169.0], [78.1, 169.0], [78.2, 169.0], [78.3, 169.0], [78.4, 169.0], [78.5, 169.0], [78.6, 170.0], [78.7, 170.0], [78.8, 170.0], [78.9, 170.0], [79.0, 170.0], [79.1, 170.0], [79.2, 170.0], [79.3, 170.0], [79.4, 170.0], [79.5, 170.0], [79.6, 170.0], [79.7, 170.0], [79.8, 170.0], [79.9, 171.0], [80.0, 171.0], [80.1, 171.0], [80.2, 171.0], [80.3, 171.0], [80.4, 171.0], [80.5, 171.0], [80.6, 171.0], [80.7, 171.0], [80.8, 171.0], [80.9, 171.0], [81.0, 171.0], [81.1, 172.0], [81.2, 172.0], [81.3, 172.0], [81.4, 172.0], [81.5, 172.0], [81.6, 172.0], [81.7, 172.0], [81.8, 172.0], [81.9, 172.0], [82.0, 172.0], [82.1, 172.0], [82.2, 172.0], [82.3, 173.0], [82.4, 173.0], [82.5, 173.0], [82.6, 173.0], [82.7, 173.0], [82.8, 173.0], [82.9, 173.0], [83.0, 173.0], [83.1, 173.0], [83.2, 173.0], [83.3, 173.0], [83.4, 174.0], [83.5, 174.0], [83.6, 174.0], [83.7, 174.0], [83.8, 174.0], [83.9, 174.0], [84.0, 174.0], [84.1, 174.0], [84.2, 174.0], [84.3, 174.0], [84.4, 174.0], [84.5, 175.0], [84.6, 175.0], [84.7, 175.0], [84.8, 175.0], [84.9, 175.0], [85.0, 175.0], [85.1, 175.0], [85.2, 175.0], [85.3, 175.0], [85.4, 175.0], [85.5, 176.0], [85.6, 176.0], [85.7, 176.0], [85.8, 176.0], [85.9, 176.0], [86.0, 176.0], [86.1, 176.0], [86.2, 176.0], [86.3, 176.0], [86.4, 177.0], [86.5, 177.0], [86.6, 177.0], [86.7, 177.0], [86.8, 177.0], [86.9, 177.0], [87.0, 177.0], [87.1, 177.0], [87.2, 177.0], [87.3, 177.0], [87.4, 178.0], [87.5, 178.0], [87.6, 178.0], [87.7, 178.0], [87.8, 178.0], [87.9, 178.0], [88.0, 178.0], [88.1, 178.0], [88.2, 178.0], [88.3, 179.0], [88.4, 179.0], [88.5, 179.0], [88.6, 179.0], [88.7, 179.0], [88.8, 179.0], [88.9, 179.0], [89.0, 179.0], [89.1, 179.0], [89.2, 180.0], [89.3, 180.0], [89.4, 180.0], [89.5, 180.0], [89.6, 180.0], [89.7, 180.0], [89.8, 180.0], [89.9, 181.0], [90.0, 181.0], [90.1, 181.0], [90.2, 181.0], [90.3, 181.0], [90.4, 181.0], [90.5, 181.0], [90.6, 181.0], [90.7, 182.0], [90.8, 182.0], [90.9, 182.0], [91.0, 182.0], [91.1, 182.0], [91.2, 182.0], [91.3, 182.0], [91.4, 183.0], [91.5, 183.0], [91.6, 183.0], [91.7, 183.0], [91.8, 183.0], [91.9, 183.0], [92.0, 184.0], [92.1, 184.0], [92.2, 184.0], [92.3, 184.0], [92.4, 184.0], [92.5, 184.0], [92.6, 185.0], [92.7, 185.0], [92.8, 185.0], [92.9, 185.0], [93.0, 186.0], [93.1, 186.0], [93.2, 186.0], [93.3, 186.0], [93.4, 186.0], [93.5, 187.0], [93.6, 187.0], [93.7, 187.0], [93.8, 187.0], [93.9, 188.0], [94.0, 188.0], [94.1, 188.0], [94.2, 189.0], [94.3, 189.0], [94.4, 189.0], [94.5, 190.0], [94.6, 190.0], [94.7, 190.0], [94.8, 191.0], [94.9, 191.0], [95.0, 191.0], [95.1, 192.0], [95.2, 192.0], [95.3, 192.0], [95.4, 192.0], [95.5, 193.0], [95.6, 193.0], [95.7, 193.0], [95.8, 194.0], [95.9, 194.0], [96.0, 195.0], [96.1, 195.0], [96.2, 196.0], [96.3, 196.0], [96.4, 197.0], [96.5, 197.0], [96.6, 198.0], [96.7, 199.0], [96.8, 199.0], [96.9, 200.0], [97.0, 201.0], [97.1, 201.0], [97.2, 202.0], [97.3, 202.0], [97.4, 203.0], [97.5, 203.0], [97.6, 204.0], [97.7, 205.0], [97.8, 206.0], [97.9, 206.0], [98.0, 207.0], [98.1, 208.0], [98.2, 209.0], [98.3, 210.0], [98.4, 211.0], [98.5, 212.0], [98.6, 213.0], [98.7, 214.0], [98.8, 216.0], [98.9, 218.0], [99.0, 219.0], [99.1, 221.0], [99.2, 222.0], [99.3, 223.0], [99.4, 225.0], [99.5, 226.0], [99.6, 228.0], [99.7, 231.0], [99.8, 238.0], [99.9, 253.0], [100.0, 268.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1215.0, "minX": 0.0, "maxY": 21682.0, "series": [{"data": [[0.0, 15153.0], [100.0, 21682.0], [200.0, 1215.0]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38050.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 38050.0, "series": [{"data": [[0.0, 38050.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.025240936209263, "minX": 1.69852519E12, "maxY": 100.0, "series": [{"data": [[1.698525245E12, 100.0], [1.698525225E12, 100.0], [1.698525205E12, 56.99916201117317], [1.698525195E12, 23.859357696567], [1.69852524E12, 100.0], [1.69852522E12, 99.95554058605576], [1.6985252E12, 40.59798850574703], [1.69852519E12, 9.025240936209263], [1.698525235E12, 100.0], [1.698525215E12, 90.024222488038], [1.69852525E12, 88.31999999999996], [1.69852523E12, 100.0], [1.69852521E12, 73.74960085151683]], "isOverall": false, "label": "MinimalMeet-express", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852525E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.908163265306124, "minX": 1.0, "maxY": 183.58860759493678, "series": [{"data": [[2.0, 6.908163265306124], [3.0, 7.400000000000002], [4.0, 11.546296296296292], [5.0, 10.311258278145697], [6.0, 12.916666666666671], [7.0, 13.375000000000004], [8.0, 15.787096774193552], [9.0, 17.5897435897436], [10.0, 19.80891719745223], [11.0, 18.05882352941177], [12.0, 20.61235955056179], [13.0, 21.12834224598931], [14.0, 24.272727272727288], [15.0, 24.410526315789475], [16.0, 23.34782608695652], [17.0, 24.495238095238093], [18.0, 26.086538461538463], [19.0, 26.611872146118717], [20.0, 26.60619469026549], [21.0, 29.447916666666657], [22.0, 37.18500000000003], [23.0, 29.395744680851045], [24.0, 33.255707762557094], [25.0, 31.04918032786886], [26.0, 34.8663594470046], [27.0, 35.186721991701226], [28.0, 35.9786324786325], [29.0, 38.54625550660795], [30.0, 41.91244239631335], [31.0, 48.45312500000003], [32.0, 48.107692307692304], [33.0, 46.38532110091742], [34.0, 48.8815165876777], [35.0, 48.185520361990946], [36.0, 54.96808510638297], [37.0, 58.903553299492394], [38.0, 49.80086580086583], [39.0, 74.07894736842104], [40.0, 59.86407766990292], [41.0, 62.05128205128207], [42.0, 61.523584905660414], [43.0, 55.110169491525426], [44.0, 59.441964285714306], [45.0, 57.302127659574445], [46.0, 63.32547169811318], [47.0, 64.08085106382981], [48.0, 72.40526315789471], [49.0, 64.08154506437772], [50.0, 63.06276150627615], [51.0, 72.71563981042654], [52.0, 63.71074380165288], [53.0, 71.08755760368666], [54.0, 75.58295964125563], [55.0, 83.4114583333333], [56.0, 90.61780104712044], [57.0, 78.09090909090907], [58.0, 74.57322175732212], [59.0, 75.59913793103448], [60.0, 86.19459459459458], [61.0, 108.57142857142853], [62.0, 84.84716157205239], [63.0, 91.29441624365481], [64.0, 92.5767441860465], [65.0, 85.2366071428572], [66.0, 87.65384615384615], [67.0, 89.66964285714286], [68.0, 90.94196428571432], [69.0, 84.39344262295083], [70.0, 89.7542372881356], [71.0, 95.37104072398195], [72.0, 96.77464788732394], [73.0, 110.6844660194175], [74.0, 97.32900432900435], [75.0, 97.03829787234045], [76.0, 95.95378151260506], [77.0, 97.68803418803418], [78.0, 99.4937238493724], [79.0, 97.04526748971196], [80.0, 108.49769585253462], [81.0, 118.98395721925134], [82.0, 118.35526315789474], [83.0, 102.19262295081958], [84.0, 110.96444444444447], [85.0, 110.48728813559329], [86.0, 105.05737704918035], [87.0, 113.12334801762114], [88.0, 145.84239130434787], [89.0, 109.62127659574462], [90.0, 159.74522292993626], [91.0, 160.49418604651163], [92.0, 183.58860759493678], [93.0, 142.97916666666663], [94.0, 156.73142857142864], [95.0, 156.36458333333323], [96.0, 139.42995169082118], [97.0, 152.0842105263157], [98.0, 162.9840425531915], [99.0, 152.13756613756613], [100.0, 169.46483762598035], [1.0, 9.777777777777779]], "isOverall": false, "label": "GET /meetings", "isController": false}, {"data": [[74.48042049934286, 118.6583442838375]], "isOverall": false, "label": "GET /meetings-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11985.0, "minX": 1.69852519E12, "maxY": 1.56956628E7, "series": [{"data": [[1.698525245E12, 1.24337382E7], [1.698525225E12, 1.23334998E7], [1.698525205E12, 1.4952228E7], [1.698525195E12, 1.50858792E7], [1.69852524E12, 1.13937648E7], [1.69852522E12, 1.24003254E7], [1.6985252E12, 1.4534568E7], [1.69852519E12, 9100811.4], [1.698525235E12, 1.29934026E7], [1.698525215E12, 1.39665504E7], [1.69852525E12, 1775055.0], [1.69852523E12, 1.22541444E7], [1.69852521E12, 1.56956628E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.698525245E12, 83951.4], [1.698525225E12, 83274.6], [1.698525205E12, 100956.0], [1.698525195E12, 101858.4], [1.69852524E12, 76929.6], [1.69852522E12, 83725.8], [1.6985252E12, 98136.0], [1.69852519E12, 61447.8], [1.698525235E12, 87730.2], [1.698525215E12, 94300.8], [1.69852525E12, 11985.0], [1.69852523E12, 82738.8], [1.69852521E12, 105975.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852525E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15.864616796695739, "minX": 1.69852519E12, "maxY": 181.47543988269726, "series": [{"data": [[1.698525245E12, 168.9217332885454], [1.698525225E12, 169.57907213003728], [1.698525205E12, 79.19245810055861], [1.698525195E12, 32.54291251384276], [1.69852524E12, 181.47543988269726], [1.69852522E12, 167.5139777702932], [1.6985252E12, 57.608620689655154], [1.69852519E12, 15.864616796695739], [1.698525235E12, 161.0054644808743], [1.698525215E12, 134.29665071770344], [1.69852525E12, 160.47058823529403], [1.69852523E12, 169.66189502385828], [1.69852521E12, 97.61149547631707]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852525E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15.822395594309329, "minX": 1.69852519E12, "maxY": 181.4453812316714, "series": [{"data": [[1.698525245E12, 168.897211958347], [1.698525225E12, 169.54249915340299], [1.698525205E12, 79.1639664804469], [1.698525195E12, 32.50885935769659], [1.69852524E12, 181.4453812316714], [1.69852522E12, 167.4840013472558], [1.6985252E12, 57.572988505747155], [1.69852519E12, 15.822395594309329], [1.698525235E12, 160.9791063966572], [1.698525215E12, 134.27063397129172], [1.69852525E12, 160.43764705882353], [1.69852523E12, 169.63190184049077], [1.69852521E12, 97.5787653006916]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852525E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8281000532197975, "minX": 1.69852519E12, "maxY": 1.0274926686217005, "series": [{"data": [[1.698525245E12, 0.9979845482028911], [1.698525225E12, 0.9644429393836774], [1.698525205E12, 0.8650837988826823], [1.698525195E12, 0.8452380952380959], [1.69852524E12, 1.0274926686217005], [1.69852522E12, 0.9632873021219263], [1.6985252E12, 0.8919540229885058], [1.69852519E12, 0.9977053694355222], [1.698525235E12, 0.9643201542912248], [1.698525215E12, 0.8995215311004776], [1.69852525E12, 1.0141176470588242], [1.69852523E12, 0.9836400817995922], [1.69852521E12, 0.8281000532197975]], "isOverall": false, "label": "GET /meetings", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852525E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.69852519E12, "maxY": 268.0, "series": [{"data": [[1.698525245E12, 258.0], [1.698525225E12, 217.0], [1.698525205E12, 143.0], [1.698525195E12, 110.0], [1.69852524E12, 268.0], [1.69852522E12, 211.0], [1.6985252E12, 93.0], [1.69852519E12, 69.0], [1.698525235E12, 204.0], [1.698525215E12, 233.0], [1.69852525E12, 175.0], [1.69852523E12, 234.0], [1.69852521E12, 161.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.698525245E12, 148.0], [1.698525225E12, 139.0], [1.698525205E12, 54.0], [1.698525195E12, 15.0], [1.69852524E12, 153.0], [1.69852522E12, 136.0], [1.6985252E12, 35.0], [1.69852519E12, 4.0], [1.698525235E12, 138.0], [1.698525215E12, 95.0], [1.69852525E12, 132.0], [1.69852523E12, 140.0], [1.69852521E12, 76.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.698525245E12, 183.0], [1.698525225E12, 188.0], [1.698525205E12, 98.0], [1.698525195E12, 44.0], [1.69852524E12, 205.0999999999999], [1.69852522E12, 189.0], [1.6985252E12, 73.0], [1.69852519E12, 25.0], [1.698525235E12, 174.0], [1.698525215E12, 167.0], [1.69852525E12, 170.0], [1.69852523E12, 206.0], [1.69852521E12, 110.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.698525245E12, 228.0], [1.698525225E12, 213.0], [1.698525205E12, 133.0], [1.698525195E12, 53.0], [1.69852524E12, 261.71000000000004], [1.69852522E12, 203.0], [1.6985252E12, 87.0], [1.69852519E12, 33.19999999999982], [1.698525235E12, 201.0], [1.698525215E12, 225.55000000000018], [1.69852525E12, 174.74], [1.69852523E12, 228.0], [1.69852521E12, 152.40999999999985]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.698525245E12, 167.0], [1.698525225E12, 168.0], [1.698525205E12, 78.0], [1.698525195E12, 31.0], [1.69852524E12, 178.0], [1.69852522E12, 168.0], [1.6985252E12, 55.0], [1.69852519E12, 16.0], [1.698525235E12, 159.0], [1.698525215E12, 136.0], [1.69852525E12, 161.0], [1.69852523E12, 164.0], [1.69852521E12, 96.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.698525245E12, 189.0], [1.698525225E12, 202.0], [1.698525205E12, 104.0], [1.698525195E12, 48.0], [1.69852524E12, 222.0], [1.69852522E12, 195.0], [1.6985252E12, 79.0], [1.69852519E12, 27.0], [1.698525235E12, 192.0], [1.698525215E12, 175.75], [1.69852525E12, 172.0], [1.69852523E12, 216.0], [1.69852521E12, 117.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852525E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 83.0, "maxY": 186.0, "series": [{"data": [[516.0, 12.0], [529.0, 183.0], [532.0, 186.0], [528.0, 181.0], [547.0, 18.0], [568.0, 152.0], [562.0, 182.0], [564.0, 172.0], [554.0, 177.0], [571.0, 159.0], [560.0, 178.0], [604.0, 169.0], [605.0, 163.0], [590.0, 173.0], [588.0, 173.0], [593.0, 161.0], [595.0, 166.0], [597.0, 163.0], [603.0, 161.0], [602.0, 163.0], [578.0, 170.0], [591.0, 167.0], [612.0, 92.5], [625.0, 65.0], [626.0, 152.0], [637.0, 151.0], [622.0, 157.0], [629.0, 157.0], [624.0, 160.5], [618.0, 159.0], [668.0, 52.0], [663.0, 84.0], [654.0, 153.0], [643.0, 156.0], [692.0, 24.0], [693.0, 27.0], [689.0, 43.0], [703.0, 47.0], [712.0, 64.0], [707.0, 72.0], [724.0, 78.0], [717.0, 85.0], [725.0, 99.0], [716.0, 107.0], [767.0, 66.0], [761.0, 88.0], [736.0, 111.0], [771.0, 35.0], [772.0, 56.0], [769.0, 65.0], [789.0, 98.0], [777.0, 108.0], [83.0, 5.0], [421.0, 8.0], [425.0, 161.0], [506.0, 180.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 789.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 83.0, "maxY": 186.0, "series": [{"data": [[516.0, 12.0], [529.0, 183.0], [532.0, 186.0], [528.0, 181.0], [547.0, 18.0], [568.0, 152.0], [562.0, 182.0], [564.0, 172.0], [554.0, 177.0], [571.0, 159.0], [560.0, 178.0], [604.0, 169.0], [605.0, 163.0], [590.0, 173.0], [588.0, 173.0], [593.0, 161.0], [595.0, 166.0], [597.0, 163.0], [603.0, 161.0], [602.0, 163.0], [578.0, 170.0], [591.0, 167.0], [612.0, 92.0], [625.0, 65.0], [626.0, 152.0], [637.0, 151.0], [622.0, 157.0], [629.0, 157.0], [624.0, 160.5], [618.0, 159.0], [668.0, 52.0], [663.0, 84.0], [654.0, 152.5], [643.0, 156.0], [692.0, 24.0], [693.0, 27.0], [689.0, 43.0], [703.0, 47.0], [712.0, 64.0], [707.0, 72.0], [724.0, 78.0], [717.0, 84.0], [725.0, 99.0], [716.0, 107.0], [767.0, 66.0], [761.0, 88.0], [736.0, 111.0], [771.0, 35.0], [772.0, 56.0], [769.0, 65.0], [789.0, 98.0], [777.0, 108.0], [83.0, 5.0], [421.0, 8.0], [425.0, 161.0], [506.0, 180.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 789.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 65.0, "minX": 1.69852519E12, "maxY": 755.0, "series": [{"data": [[1.698525245E12, 595.4], [1.698525225E12, 590.4], [1.698525205E12, 719.2], [1.698525195E12, 725.8], [1.69852524E12, 545.6], [1.69852522E12, 594.0], [1.6985252E12, 699.4], [1.69852519E12, 438.8], [1.698525235E12, 622.2], [1.698525215E12, 672.2], [1.69852525E12, 65.0], [1.69852523E12, 587.0], [1.69852521E12, 755.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852525E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 85.0, "minX": 1.69852519E12, "maxY": 751.6, "series": [{"data": [[1.698525245E12, 595.4], [1.698525225E12, 590.6], [1.698525205E12, 716.0], [1.698525195E12, 722.4], [1.69852524E12, 545.6], [1.69852522E12, 593.8], [1.6985252E12, 696.0], [1.69852519E12, 435.8], [1.698525235E12, 622.2], [1.698525215E12, 668.8], [1.69852525E12, 85.0], [1.69852523E12, 586.8], [1.69852521E12, 751.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.69852525E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 85.0, "minX": 1.69852519E12, "maxY": 751.6, "series": [{"data": [[1.698525245E12, 595.4], [1.698525225E12, 590.6], [1.698525205E12, 716.0], [1.698525195E12, 722.4], [1.69852524E12, 545.6], [1.69852522E12, 593.8], [1.6985252E12, 696.0], [1.69852519E12, 435.8], [1.698525235E12, 622.2], [1.698525215E12, 668.8], [1.69852525E12, 85.0], [1.69852523E12, 586.8], [1.69852521E12, 751.6]], "isOverall": false, "label": "GET /meetings-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852525E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 85.0, "minX": 1.69852519E12, "maxY": 751.6, "series": [{"data": [[1.698525245E12, 595.4], [1.698525225E12, 590.6], [1.698525205E12, 716.0], [1.698525195E12, 722.4], [1.69852524E12, 545.6], [1.69852522E12, 593.8], [1.6985252E12, 696.0], [1.69852519E12, 435.8], [1.698525235E12, 622.2], [1.698525215E12, 668.8], [1.69852525E12, 85.0], [1.69852523E12, 586.8], [1.69852521E12, 751.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.69852525E12, "title": "Total Transactions Per Second"}},
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

