import Router from 'next/router';
import fetch from 'isomorphic-fetch';

export default class SearchService {

    /**
     * create a new search request
     * 
     * @param Date startDate 
     * @param Date endDate 
     */
    static Search(startDate, endDate) {
        // will throw exception if fails
        this.ValidateDateRange(startDate, endDate);
        this.Go(startDate, endDate);
    }

    /**
     * Send user to the search page
     * 
     * @param Date startDate 
     * @param Date endDate 
     */
    static Go(startDate, endDate)
    {
        Router.push({
            pathname: '/search',
            query: {
                start: this.FormatDate(startDate),
                end: this.FormatDate(endDate)
            }
          });
    }

    /**
     * Formate the date into the required shape
     * This works well for passing SEO type values through the URI
     * 
     * @param Date value 
     */
    static FormatDate(value) {
        return new Date(value).toISOString().slice(0,10)
    }

    /**
     * Generate a api url for this date
     * 
     * @param Date date 
     */
    static GetApiUrlForDate(date)
    {
        const value = date.toISOString().slice(5,10).replace('-', '/');

        return `http://numbersapi.com/${value}/date`;
    }

    static async CollectNotes(days)
    {
        var notes = [];

        for(let i = 0; i < days.length; i++) {
            const response = await fetch(this.GetApiUrlForDate(days[i]), {cache: "force-cache"})
                .then(response => {
                    // THERE SHOULD BE ERROR HANDLING HERE !!!
                    return response.text();
                })
                .then(response => {
                    notes.push(
                        this.FormatNote(response, days[i])
                    );
                })
                .catch(e => {console.log(e)});
        }

        return notes;
    }

    static FormatNote(note, date)
    {
        const months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

        const month = months[date.getMonth()],
            day = date.getDate();

        const nth = this.GetDateNt(day);
        const dateString = `${month} ${day}${nth}`;
        const noteString = note.replace(dateString, '');

        return {
            date: dateString,
            note: noteString
        };
        
    }

    static GetDateNt(day)
    {
        if (day > 3 && day < 21) return 'th'; 
        switch (day % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    /**
     * Validate a date range
     * 
     * @param Date dateFrom 
     * @param Date dateTo 
     * @param bool throwException 
     */
    static ValidateDateRange(dateFrom, dateTo, throwException = true) {
        try {
            this.ValidateDate(dateFrom);
            this.ValidateDate(dateTo);
        } catch (e) {
            if (!throwException) {
                return false;
            }

            throw e;
        }

        return true;
    }

    /**
     * Simple check to see if the value passed is what we expect
     * This is not a production ready function !
     * 
     * @param Date value 
     */
    static ValidateDate(value)
    {
        if (!value) {
            throw "Please provide all dates";
        } else if (!value instanceof Date) {
            throw `Value passed is not a date ${value}`;
        }
    }

    static IsMonday(date)
    {
        return date.getDay() === 1;
    }

    static HasLeapYear(years)
    {
        for (let i = 0; i < years.length; i++) {
            if (new Date(years[i], 1, 29).getDate() === 29) {
                return true;
            }
        }

        return false;
    }

    static async CollectDateItems(dateFrom, dateTo) {
        let days = [];
        let years = [];
        let mondays = 0;
        dateFrom = new Date(dateFrom);
        dateTo = new Date(dateTo);

        // Resolve time difference so we can create a linear search
        let current = dateFrom.getTime() < dateTo.getTime() ? dateFrom : dateTo;
        const end = dateFrom.getTime() > dateTo.getTime() ? dateFrom : dateTo;
        const endTime = end.getTime();
        
        // push the first item onto the array
        days.push(new Date(current));

        if (this.IsMonday(current)) {
            mondays++;
        }

        // Create a array of all the values between
        while (endTime > current.getTime()) {
            days.push(current);

            if (this.IsMonday(current)) {
                mondays++;
            }

            // check to see if we tracking these years or not            
            if (!years.includes(current.getFullYear())) {
                years.push(current.getFullYear());
            }

            current = new Date(current.setDate(current.getDate() + 1));
        }

        return {
            daysApart: days.length,
            amountOfMondays: mondays,
            hasLeapYear: this.HasLeapYear(years),
            notes: await this.CollectNotes(days)
        };
    }
}