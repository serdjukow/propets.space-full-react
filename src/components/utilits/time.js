const renderTime = (dateTime) => {
    const datePart = new Date(dateTime);
    const date = `${datePart.toLocaleDateString("en-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    return date;
  };

  export default renderTime