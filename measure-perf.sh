sudo sysctl kernel.kptr_restrict=0
# May also have to do the following:
# (additional reading http://unix.stackexchange.com/questions/14227/do-i-need-root-admin-permissions-to-run-userspace-perf-tool-perf-events-ar )
sudo sysctl kernel.perf_event_paranoid=0

perf record -i -g -e cycles:u -- node --perf-basic-prof index.js