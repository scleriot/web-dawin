#!/bin/bash
find ./ -name "*.adoc" -execdir asciidoctor "{}" \;