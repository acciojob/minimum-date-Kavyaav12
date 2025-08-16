function minDate(dates) {
    if (!Array.isArray(dates) || dates.length === 0) {
        return null; // Handle empty or invalid input
    }

    // Return the minimum (earliest) date using lexicographical sort
    return [...dates].sort()[0];
}

