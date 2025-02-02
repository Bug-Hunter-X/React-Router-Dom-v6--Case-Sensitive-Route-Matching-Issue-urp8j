# React Router Dom v6 Case-Sensitive Route Matching Issue

This repository demonstrates a subtle bug in React Router Dom v6 related to case sensitivity in route matching.  When defining routes with identical paths but different casing (e.g., `/about` vs `/About`), the router unexpectedly prioritizes the first-defined route, regardless of the URL case. This leads to incorrect route rendering.

## Problem
The issue arises when two or more routes have paths that differ only in case.  The router doesn't handle the case-insensitive match correctly, making the application behave unexpectedly.

## Solution
The solution involves using a case-insensitive matching strategy, which is not directly provided by React Router Dom v6. A common approach is to use a custom component that normalizes the URL before performing the matching.