perf script | egrep -v "( __libc_start| LazyCompile | v8::internal::| Builtin:| Stub:| LoadIC:|\[unknown\]| LoadPolymorphicIC:)" | sed 's/ LazyCompile:[*~]\?/ /' | ~/sources/FlameGraph/stackcollapse-perf.pl > out.perf-folded

~/sources/FlameGraph/flamegraph.pl out.perf-folded > node-flame.svg