import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <GitHubCalendar
      username="Ibaliqbal"
      colorScheme="dark"
      showWeekdayLabels
      blockSize={14}
      labels={{
        totalCount: "{{count}} contributions in the last half year",
      }}
      hideColorLegend
    />
  );
};

export default GithubStats;
