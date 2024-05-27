function FormatDate() {
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString("en-UK", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return formattedDate;
}

export default FormatDate;
