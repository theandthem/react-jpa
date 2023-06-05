function ProperDate({ todaysDate } ) {
  const properDate = todaysDate.replace(/-/g, '/').split('/').reverse().join('/');

  return (
    <span>{properDate}</span>
  );
}

export default ProperDate;