function myFunction() {
    var source = SpreadsheetApp.getActiveSpreadsheet();
    const data = getData('Booked Media', source);
    const translationData = getEndData('Master Data', source, data.dataTranslation()[0]);
    pastingData(translationData.dataSegmentation(), source, 'Master Data', data.dataTranslation()[1], 'Booked Media');
}

class DataSources {
    constructor(rawData, source) { //class constructor
        this.rawData = rawData;
        this.source = source
        this.rawSheet = this.source.getSheetByName(this.rawData);
        this.rawSheetRange = this.rawSheet.getDataRange();
        this.rawSheetData = this.rawSheetRange.getValues();
        this.translationDataSet = []
    }

    dataTranslation() {
        for (let i = 0; i < this.rawSheetData.length; i++) {
            if (this.rawSheetData[i][11] == 'N') {
                if (this.rawSheetData[i][10] != 0) {
                    this.translationDataSet.push(this.rawSheetData[i]);
                    this.rawSheetData[i][11] = 'Y';
                }
            }
        }
        return [this.translationDataSet, this.rawSheetData];
    }
}

function getData(rawData, source) {
    return new DataSources(rawData, source);
}

class endData {
    constructor(endDataSource, source, endDataArray) {
        this.endDataSource = endDataSource;
        this.source = source;
        this.endSheet = this.source.getSheetByName(this.endDataSource);
        this.endSheetRange = this.endSheet.getDataRange();
        this.endSheetData = this.endSheetRange.getValues();
        this.endDataArray = endDataArray;
    }

    //media week classifiers take the current index being worked on and return the start and end media week, depending on the method
    //these are meant to be called in a for loop looping through all the data, the specific index terminology is [i][index known]
    mediaStartWeekClassifier(index) {
        var mediaStartWeek = 0
        var mediaStartDate = this.endDataArray[index][2]
        if (mediaStartDate >= new Date('12/27/2021') && mediaStartDate < new Date('1/3/2022')) {
            return mediaStartWeek = 53;
        }
        else if (mediaStartDate >= new Date('1/3/2022') && mediaStartDate < new Date('1/10/2022')) {
            return mediaStartWeek = 54;
        }
        else if (mediaStartDate >= new Date('1/10/2022') && mediaStartDate < new Date('1/17/2022')) {
            return mediaStartWeek = 55;
        }
        else if (mediaStartDate >= new Date('1/17/2022') && mediaStartDate < new Date('1/24/2022')) {
            return mediaStartWeek = 56;
        }
        else if (mediaStartDate >= new Date('1/24/2022') && mediaStartDate < new Date('1/21/2022')) {
            return mediaStartWeek = 57;
        }
        else if (mediaStartDate >= new Date('1/31/2022') && mediaStartDate < new Date('2/7/2022')) {
            return mediaStartWeek = 58;
        }
        else if (mediaStartDate >= new Date('2/7/2022') && mediaStartDate < new Date('2/14/2022')) {
            return mediaStartWeek = 59;
        }
        else if (mediaStartDate >= new Date('2/14/2022') && mediaStartDate < new Date('2/21/2022')) {
            return mediaStartWeek = 60;
        }
        else if (mediaStartDate >= new Date('2/21/2022') && mediaStartDate < new Date('2/28/2022')) {
            return mediaStartWeek = 61;
        }
        else if (mediaStartDate >= new Date('2/28/2022') && mediaStartDate < new Date('3/7/2022')) {
            return mediaStartWeek = 62;
        }
        else if (mediaStartDate >= new Date('3/7/2022') && mediaStartDate < new Date('3/14/2022')) {
            return mediaStartWeek = 63;
        }
        else if (mediaStartDate >= new Date('3/14/2022') && mediaStartDate < new Date('3/21/2022')) {
            return mediaStartWeek = 64;
        }
        else if (mediaStartDate >= new Date('3/21/2022') && mediaStartDate < new Date('3/28/2022')) {
            return mediaStartWeek = 65;
        }
        else if (mediaStartDate >= new Date('3/28/2022') && mediaStartDate < new Date('4/4/2022')) {
            return mediaStartWeek = 66;
        }
        else if (mediaStartDate >= new Date('4/4/2022') && mediaStartDate < new Date('4/11/2022')) {
            return mediaStartWeek = 67;
        }
        else if (mediaStartDate >= new Date('4/11/2022') && mediaStartDate < new Date('4/18/2022')) {
            return mediaStartWeek = 68;
        }
        else if (mediaStartDate >= new Date('4/18/2022') && mediaStartDate < new Date('4/25/2022')) {
            return mediaStartWeek = 69;
        }
        else if (mediaStartDate >= new Date('4/25/2022') && mediaStartDate < new Date('5/2/2022')) {
            return mediaStartWeek = 70;
        }
        else if (mediaStartDate >= new Date('5/2/2022') && mediaStartDate < new Date('5/9/2022')) {
            return mediaStartWeek = 71;
        }
        else if (mediaStartDate >= new Date('5/9/2022') && mediaStartDate < new Date('5/16/2022')) {
            return mediaStartWeek = 72;
        }
        else if (mediaStartDate >= new Date('5/16/2022') && mediaStartDate < new Date('5/23/2022')) {
            return mediaStartWeek = 73;
        }
        else if (mediaStartDate >= new Date('5/23/2022') && mediaStartDate < new Date('5/30/2022')) {
            return mediaStartWeek = 74;
        }
        else if (mediaStartDate >= new Date('5/30/2022') && mediaStartDate < new Date('6/6/2022')) {
            return mediaStartWeek = 75;
        }
        else if (mediaStartDate >= new Date('6/6/2022') && mediaStartDate < new Date('6/13/2022')) {
            return mediaStartWeek = 76;
        }
        else if (mediaStartDate >= new Date('6/13/2022') && mediaStartDate < new Date('6/20/2022')) {
            return mediaStartWeek = 77;
        }
        else if (mediaStartDate >= new Date('6/20/2022') && mediaStartDate < new Date('6/27/2022')) {
            return mediaStartWeek = 78;
        }
        else if (mediaStartDate >= new Date('6/27/2022') && mediaStartDate < new Date('7/4/2022')) {
            return mediaStartWeek = 79;
        }
        else if (mediaStartDate >= new Date('7/4/2022') && mediaStartDate < new Date('7/11/2022')) {
            return mediaStartWeek = 80;
        }
        else if (mediaStartDate >= new Date('7/11/2022') && mediaStartDate < new Date('7/18/2022')) {
            return mediaStartWeek = 81;
        }
        else if (mediaStartDate >= new Date('7/18/2022') && mediaStartDate < new Date('7/25/2022')) {
            return mediaStartWeek = 82;
        }
        else if (mediaStartDate >= new Date('7/25/2022') && mediaStartDate < new Date('8/1/2022')) {
            return mediaStartWeek = 83;
        }
        else if (mediaStartDate >= new Date('8/1/2022') && mediaStartDate < new Date('8/8/2022')) {
            return mediaStartWeek = 84;
        }
        else if (mediaStartDate >= new Date('8/8/2022') && mediaStartDate < new Date('8/15/2022')) {
            return mediaStartWeek = 85;
        }
        else if (mediaStartDate >= new Date('8/15/2022') && mediaStartDate < new Date('8/22/2022')) {
            return mediaStartWeek = 86;
        }
        else if (mediaStartDate >= new Date('8/22/2022') && mediaStartDate < new Date('8/29/2022')) {
            return mediaStartWeek = 87;
        }
        else if (mediaStartDate >= new Date('8/29/2022') && mediaStartDate < new Date('9/5/2022')) {
            return mediaStartWeek = 88;
        }
        else if (mediaStartDate >= new Date('9/5/2022') && mediaStartDate < new Date('9/12/2022')) {
            return mediaStartWeek = 89;
        }
        else if (mediaStartDate >= new Date('9/12/2022') && mediaStartDate < new Date('9/19/2022')) {
            return mediaStartWeek = 90;
        }
        else if (mediaStartDate >= new Date('9/19/2022') && mediaStartDate < new Date('9/26/2022')) {
            return mediaStartWeek = 91;
        }
        else if (mediaStartDate >= new Date('9/26/2022') && mediaStartDate < new Date('10/3/2022')) {
            return mediaStartWeek = 92;
        }
        else if (mediaStartDate >= new Date('10/3/2022') && mediaStartDate < new Date('10/10/2022')) {
            return mediaStartWeek = 93;
        }
        else if (mediaStartDate >= new Date('10/10/2022') && mediaStartDate < new Date('10/17/2022')) {
            return mediaStartWeek = 94;
        }
        else if (mediaStartDate >= new Date('10/17/2022') && mediaStartDate < new Date('10/24/2022')) {
            return mediaStartWeek = 95;
        }
        else if (mediaStartDate >= new Date('10/24/2022') && mediaStartDate < new Date('10/31/2022')) {
            return mediaStartWeek = 96;
        }
        else if (mediaStartDate >= new Date('10/31/2022') && mediaStartDate < new Date('11/7/2022')) {
            return mediaStartWeek = 97;
        }
        else if (mediaStartDate >= new Date('11/7/2022') && mediaStartDate < new Date('11/14/2022')) {
            return mediaStartWeek = 98;
        }
        else if (mediaStartDate >= new Date('11/14/2022') && mediaStartDate < new Date('11/21/2022')) {
            return mediaStartWeek = 99;
        }
        else if (mediaStartDate >= new Date('11/21/2022') && mediaStartDate < new Date('11/28/2022')) {
            return mediaStartWeek = 100;
        }
        else if (mediaStartDate >= new Date('11/28/2022') && mediaStartDate < new Date('12/5/2022')) {
            return mediaStartWeek = 101;
        }
        else if (mediaStartDate >= new Date('12/5/2022') && mediaStartDate < new Date('12/12/2022')) {
            return mediaStartWeek = 102;
        }
        else if (mediaStartDate >= new Date('12/12/2022') && mediaStartDate < new Date('12/19/2022')) {
            return mediaStartWeek = 103;
        }
        else if (mediaStartDate >= new Date('12/19/2022') && mediaStartDate < new Date('12/26/2022')) {
            return mediaStartWeek = 104;
        }
        else if (mediaStartDate >= new Date('12/26/2022') && mediaStartDate < new Date('1/2/2023')) {
            return mediaStartWeek = 105;
        }
    }

    //just realized i dont need two media week classifiers but its too late at this point i dont feel like going through and changing all my code to fix it for a minor readibility change
    mediaEndWeekClassifier(index) {
        var mediaEndWeek = 0
        var mediaEndDate = this.endDataArray[index][3]
        if (mediaEndDate >= new Date('12/27/2021') && mediaEndDate < new Date('1/3/2022')) {
            return mediaEndWeek = 53;
        }
        else if (mediaEndDate >= new Date('1/3/2022') && mediaEndDate < new Date('1/10/2022')) {
            return mediaEndWeek = 54;
        }
        else if (mediaEndDate >= new Date('1/10/2022') && mediaEndDate < new Date('1/17/2022')) {
            return mediaEndWeek = 55;
        }
        else if (mediaEndDate >= new Date('1/17/2022') && mediaEndDate < new Date('1/24/2022')) {
            return mediaEndWeek = 56;
        }
        else if (mediaEndDate >= new Date('1/24/2022') && mediaEndDate < new Date('1/21/2022')) {
            return mediaEndWeek = 57;
        }
        else if (mediaEndDate >= new Date('1/31/2022') && mediaEndDate < new Date('2/7/2022')) {
            return mediaEndWeek = 58;
        }
        else if (mediaEndDate >= new Date('2/7/2022') && mediaEndDate < new Date('2/14/2022')) {
            return mediaEndWeek = 59;
        }
        else if (mediaEndDate >= new Date('2/14/2022') && mediaEndDate < new Date('2/21/2022')) {
            return mediaEndWeek = 60;
        }
        else if (mediaEndDate >= new Date('2/21/2022') && mediaEndDate < new Date('2/28/2022')) {
            return mediaEndWeek = 61;
        }
        else if (mediaEndDate >= new Date('2/28/2022') && mediaEndDate < new Date('3/7/2022')) {
            return mediaEndWeek = 62;
        }
        else if (mediaEndDate >= new Date('3/7/2022') && mediaEndDate < new Date('3/14/2022')) {
            return mediaEndWeek = 63;
        }
        else if (mediaEndDate >= new Date('3/14/2022') && mediaEndDate < new Date('3/21/2022')) {
            return mediaEndWeek = 64;
        }
        else if (mediaEndDate >= new Date('3/21/2022') && mediaEndDate < new Date('3/28/2022')) {
            return mediaEndWeek = 65;
        }
        else if (mediaEndDate >= new Date('3/28/2022') && mediaEndDate < new Date('4/4/2022')) {
            return mediaEndWeek = 66;
        }
        else if (mediaEndDate >= new Date('4/4/2022') && mediaEndDate < new Date('4/11/2022')) {
            return mediaEndWeek = 67;
        }
        else if (mediaEndDate >= new Date('4/11/2022') && mediaEndDate < new Date('4/18/2022')) {
            return mediaEndWeek = 68;
        }
        else if (mediaEndDate >= new Date('4/18/2022') && mediaEndDate < new Date('4/25/2022')) {
            return mediaEndWeek = 69;
        }
        else if (mediaEndDate >= new Date('4/25/2022') && mediaEndDate < new Date('5/2/2022')) {
            return mediaEndWeek = 70;
        }
        else if (mediaEndDate >= new Date('5/2/2022') && mediaEndDate < new Date('5/9/2022')) {
            return mediaEndWeek = 71;
        }
        else if (mediaEndDate >= new Date('5/9/2022') && mediaEndDate < new Date('5/16/2022')) {
            return mediaEndWeek = 72;
        }
        else if (mediaEndDate >= new Date('5/16/2022') && mediaEndDate < new Date('5/23/2022')) {
            return mediaEndWeek = 73;
        }
        else if (mediaEndDate >= new Date('5/23/2022') && mediaEndDate < new Date('5/30/2022')) {
            return mediaEndWeek = 74;
        }
        else if (mediaEndDate >= new Date('5/30/2022') && mediaEndDate < new Date('6/6/2022')) {
            return mediaEndWeek = 75;
        }
        else if (mediaEndDate >= new Date('6/6/2022') && mediaEndDate < new Date('6/13/2022')) {
            return mediaEndWeek = 76;
        }
        else if (mediaEndDate >= new Date('6/13/2022') && mediaEndDate < new Date('6/20/2022')) {
            return mediaEndWeek = 77;
        }
        else if (mediaEndDate >= new Date('6/20/2022') && mediaEndDate < new Date('6/27/2022')) {
            return mediaEndWeek = 78;
        }
        else if (mediaEndDate >= new Date('6/27/2022') && mediaEndDate < new Date('7/4/2022')) {
            return mediaEndWeek = 79;
        }
        else if (mediaEndDate >= new Date('7/4/2022') && mediaEndDate < new Date('7/11/2022')) {
            return mediaEndWeek = 80;
        }
        else if (mediaEndDate >= new Date('7/11/2022') && mediaEndDate < new Date('7/18/2022')) {
            return mediaEndWeek = 81;
        }
        else if (mediaEndDate >= new Date('7/18/2022') && mediaEndDate < new Date('7/25/2022')) {
            return mediaEndWeek = 82;
        }
        else if (mediaEndDate >= new Date('7/25/2022') && mediaEndDate < new Date('8/1/2022')) {
            return mediaEndWeek = 83;
        }
        else if (mediaEndDate >= new Date('8/1/2022') && mediaEndDate < new Date('8/8/2022')) {
            return mediaEndWeek = 84;
        }
        else if (mediaEndDate >= new Date('8/8/2022') && mediaEndDate < new Date('8/15/2022')) {
            return mediaEndWeek = 85;
        }
        else if (mediaEndDate >= new Date('8/15/2022') && mediaEndDate < new Date('8/22/2022')) {
            return mediaEndWeek = 86;
        }
        else if (mediaEndDate >= new Date('8/22/2022') && mediaEndDate < new Date('8/29/2022')) {
            return mediaEndWeek = 87;
        }
        else if (mediaEndDate >= new Date('8/29/2022') && mediaEndDate < new Date('9/5/2022')) {
            return mediaEndWeek = 88;
        }
        else if (mediaEndDate >= new Date('9/5/2022') && mediaEndDate < new Date('9/12/2022')) {
            return mediaEndWeek = 89;
        }
        else if (mediaEndDate >= new Date('9/12/2022') && mediaEndDate < new Date('9/19/2022')) {
            return mediaEndWeek = 90;
        }
        else if (mediaEndDate >= new Date('9/19/2022') && mediaEndDate < new Date('9/26/2022')) {
            return mediaEndWeek = 91;
        }
        else if (mediaEndDate >= new Date('9/26/2022') && mediaEndDate < new Date('10/3/2022')) {
            return mediaEndWeek = 92;
        }
        else if (mediaEndDate >= new Date('10/3/2022') && mediaEndDate < new Date('10/10/2022')) {
            return mediaEndWeek = 93;
        }
        else if (mediaEndDate >= new Date('10/10/2022') && mediaEndDate < new Date('10/17/2022')) {
            return mediaEndWeek = 94;
        }
        else if (mediaEndDate >= new Date('10/17/2022') && mediaEndDate < new Date('10/24/2022')) {
            return mediaEndWeek = 95;
        }
        else if (mediaEndDate >= new Date('10/24/2022') && mediaEndDate < new Date('10/31/2022')) {
            return mediaEndWeek = 96;
        }
        else if (mediaEndDate >= new Date('10/31/2022') && mediaEndDate < new Date('11/7/2022')) {
            return mediaEndWeek = 97;
        }
        else if (mediaEndDate >= new Date('11/7/2022') && mediaEndDate < new Date('11/14/2022')) {
            return mediaEndWeek = 98;
        }
        else if (mediaEndDate >= new Date('11/14/2022') && mediaEndDate < new Date('11/21/2022')) {
            return mediaEndWeek = 99;
        }
        else if (mediaEndDate >= new Date('11/21/2022') && mediaEndDate < new Date('11/28/2022')) {
            return mediaEndWeek = 100;
        }
        else if (mediaEndDate >= new Date('11/28/2022') && mediaEndDate < new Date('12/5/2022')) {
            return mediaEndWeek = 101;
        }
        else if (mediaEndDate >= new Date('12/5/2022') && mediaEndDate < new Date('12/12/2022')) {
            return mediaEndWeek = 102;
        }
        else if (mediaEndDate >= new Date('12/12/2022') && mediaEndDate < new Date('12/19/2022')) {
            return mediaEndWeek = 103;
        }
        else if (mediaEndDate >= new Date('12/19/2022') && mediaEndDate < new Date('12/26/2022')) {
            return mediaEndWeek = 104;
        }
        else if (mediaEndDate >= new Date('12/26/2022') && mediaEndDate < new Date('1/2/2023')) {
            return mediaEndWeek = 105;
        }
    }

    // Get all media weeks takes inputs of x and y and iterates through the numbers, making a full list of all numbers
    // ex. 52 and 58 for x,y would return [52, 53, 54, 55, 56, 57, 58]
    getAllMediaWeeks(x, y) {
        var mediaWeeks = [];
        // Set a temporary variable i to start at value x.
        // As long as the value of i is less than the value y+1, increment it.
        // The loop will end when i is equal to y+1.
        for (var i = x; i < y + 1; i++) {
            mediaWeeks.push(i);
        }
        return mediaWeeks;
    }

    getDatesFromMediaWeek(index) {
        if (index == 53) {
            return ['12/27/2021', '1/2/2022']
        }
        else if (index == 54) {
            return ['1/3/2022', '1/9/2022']
        }
        else if (index == 55) {
            return ['1/10/2022', '1/16/2022']
        }
        else if (index == 56) {
            return ['1/17/2022', '1/23/2022']
        }
        else if (index == 57) {
            return ['1/24/2022', '1/30/2022']
        }
        else if (index == 58) {
            return ['1/31/2022', '2/6/2022']
        }
        else if (index == 59) {
            return ['2/7/2022', '2/13/2022']
        }
        else if (index == 60) {
            return ['2/14/2022', '2/20/2022']
        }
        else if (index == 61) {
            return ['2/21/2022', '2/27/2022']
        }
        else if (index == 62) {
            return ['2/28/2022', '3/6/2022']
        }
        else if (index == 63) {
            return ['3/7/2022', '3/13/2022']
        }
        else if (index == 64) {
            return ['3/14/2022', '3/20/2022']
        }
        else if (index == 65) {
            return ['3/21/2022', '3/27/2022']
        }
        else if (index == 66) {
            return ['3/28/2022', '4/3/2022']
        }
        else if (index == 67) {
            return ['4/4/2022', '4/10/2022']
        }
        else if (index == 68) {
            return ['4/11/2022', '4/17/2022']
        }
        else if (index == 69) {
            return ['4/18/2022', '4/24/2022']
        }
        else if (index == 70) {
            return ['4/25/2022', '5/1/2022']
        }
        else if (index == 71) {
            return ['5/2/2022', '5/8/2022']
        }
        else if (index == 72) {
            return ['5/9/2022', '5/15/2022']
        }
        else if (index == 73) {
            return ['5/16/2022', '5/22/2022']
        }
        else if (index == 74) {
            return ['5/23/2022', '5/29/2022']
        }
        else if (index == 75) {
            return ['5/30/2022', '6/5/2022']
        }
        else if (index == 76) {
            return ['6/6/2022', '6/12/2022']
        }
        else if (index == 77) {
            return ['6/13/2022', '6/19/2022']
        }
        else if (index == 78) {
            return ['6/20/2022', '6/26/2022']
        }
        else if (index == 79) {
            return ['6/27/2022', '7/3/2022']
        }
        else if (index == 80) {
            return ['7/4/2022', '7/10/2022']
        }
        else if (index == 81) {
            return ['7/11/2022', '7/17/2022']
        }
        else if (index == 82) {
            return ['7/18/2022', '7/24/2022']
        }
        else if (index == 83) {
            return ['7/25/2022', '7/31/2022']
        }
        else if (index == 84) {
            return ['8/1/2022', '8/7/2022']
        }
        else if (index == 85) {
            return ['8/8/2022', '8/14/2022']
        }
        else if (index == 86) {
            return ['8/15/2022', '8/21/2022']
        }
        else if (index == 87) {
            return ['8/22/2022', '8/28/2022']
        }
        else if (index == 88) {
            return ['8/29/2022', '9/4/2022']
        }
        else if (index == 89) {
            return ['9/5/2022', '9/11/2022']
        }
        else if (index == 90) {
            return ['9/12/2022', '9/18/2022']
        }
        else if (index == 91) {
            return ['9/19/2022', '9/25/2022']
        }
        else if (index == 92) {
            return ['9/26/2022', '10/2/2022']
        }
        else if (index == 93) {
            return ['10/3/2022', '10/9/2022']
        }
        else if (index == 94) {
            return ['10/10/2022', '10/16/2022']
        }
        else if (index == 95) {
            return ['10/17/2022', '10/23/2022']
        }
        else if (index == 96) {
            return ['10/24/2022', '10/30/2022']
        }
        else if (index == 97) {
            return ['10/31/2022', '11/6/2022']
        }
        else if (index == 98) {
            return ['11/7/2022', '11/13/2022']
        }
        else if (index == 99) {
            return ['11/14/2022', '11/20/2022']
        }
        else if (index == 100) {
            return ['11/21/2022', '11/27/2022']
        }
        else if (index == 101) {
            return ['11/28/2022', '12/4/2022']
        }
        else if (index == 102) {
            return ['12/5/2022', '12/11/2022']
        }
        else if (index == 103) {
            return ['12/12/2022', '12/18/2022']
        }
        else if (index == 104) {
            return ['12/19/2022', '12/25/2022']
        }
        else if (index == 105) {
            return ['12/26/2022', '1/1/2023']
        }
    }

    getZipCode(county) {
        if (county = 'Lassen') {
            return 96009
        }
        else if (county = 'Mono') {
            return 93514
        }
        else if (county = 'Trinity') {
            return 96048
        }
        else if (county = 'Tehama') {
            return 95973
        }
        else if (county = 'Modoc') {
            return 96101
        }
        else if (county = 'El Dorado') {
            return 95762
        }
        else if (county = 'Del Norte') {
            return 95531
        }
        else if (county = 'Madera') {
            return 93720
        }
        else if (county = 'Yuba') {
            return 95901
        }
        else if (county = 'Inyo') {
            return 93527
        }
        else if (county = 'Tuolumne') {
            return 95270
        }
        else if (county = 'Lake') {
            return 95422
        }
        else if (county = 'Siskiyou') {
            return 96097
        }
        else if (county = 'Calaveras') {
            return 95252
        }
        else if (county = 'Glenn') {
            return 95963
        }
        else if (county = 'Sierra') {
            return 96118
        }
        else if (county = 'Plumas') {
            return 95915
        }
    }

    // method to break out the data to something usuable for analysis
    // breaks out by weeks and counties, fills in all relevant information
    // still in progress, will return long formatted array at the end of creation
    dataSegmentation() {
        var finalData = [];
        var allCounties = this.allCounties();
        for (let i = 0; i < this.endDataArray.length; i++) {
            var j = this.getAllMediaWeeks(this.mediaStartWeekClassifier(i), this.mediaEndWeekClassifier(i));
            for (let k = 0; k < j.length; k++) {
                for (let g = 0; g < allCounties[i].length; g++) {
                    var tempData = [];
                    tempData.push(j[k]);
                    tempData.push(this.getDatesFromMediaWeek(j[k])[0]);
                    tempData.push(this.getDatesFromMediaWeek(j[k])[1]);
                    tempData.push(this.endDataArray[i][7]);
                    tempData.push('');
                    tempData.push('Multicultural')
                    tempData.push('Rural - ' + allCounties[i][g]);
                    tempData.push(this.endDataArray[i][10] / (j.length * allCounties[i].length));
                    tempData.push(this.endDataArray[i][1]);
                    tempData.push(allCounties[i][g]);
                    tempData.push(this.endDataArray[i][9]);
                    tempData.push(this.getZipCode(j[k]));
                    tempData.push(this.endDataArray[i][8]);

                    finalData.push(tempData);
                }
            }
        }
        return (finalData);
    }

    allCounties() {
        var allCountiesArr = []
        for (let i = 0; i < this.endDataArray.length; i++) {
            allCountiesArr.push(this.endDataArray[i][6].split(','))
        }
        return allCountiesArr;
    }
}

function getEndData(endDataVar, source, endDataArray) {
    return new endData(endDataVar, source, endDataArray);
}

function pastingData(finalData, source, sheetName, rawData, rawSheet) {
    var pastingSheet = source.getSheetByName(sheetName);
    var pastingSheetData = pastingSheet.getDataRange();
    var lastRow = pastingSheetData.getLastRow();
    pastingSheet.getRange(lastRow + 1, 1, finalData.length, 13).setValues(finalData);

    var changeRawSheet = source.getSheetByName(rawSheet);
    var rawLastRow = changeRawSheet.getLastRow();
    var rawLastColumn = changeRawSheet.getLastColumn();
    changeRawSheet.getRange(1, 1, rawLastRow, rawLastColumn).setValues(rawData);
}