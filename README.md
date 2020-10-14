![Build Status](https://codebuild.eu-north-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoieHhwTzQ5b1N0dmVYWTBScEVPa2JJR053amEyREs1VCtEWWpLVjBvbTlNVFVGWVdNL2l2anR0R3Q5NEp4b0Y1cXRXamp0NDZBUlA4andQMXNGTFhsUUpzPSIsIml2UGFyYW1ldGVyU3BlYyI6ImxLdmZZaWtISm5yUi80ZXAiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)

# Compark Nordic 

*the experience begins in the parking lot*

## The road so far

* domain registration
* github repo
* CRA with typescript init commit
* Static website hosting
    - dev (http://beta.comparknordic.com.s3-website.eu-north-1.amazonaws.com)
    - prod (http://www.comparknordic.com.s3-website.eu-north-1.amazonaws.com)
* CodeBuild
    - push to main branch trigger build and deploy to beta bucket
        - *(if changes exists in /client folder)*
    - manual trigger to build and deploy release branch to production bucket
* CloudFront
    - production bucket distributed
    - custom domain - www.comparknordic.com, comparknordic.com
    - certificate for https through Certificate Manager
* Route 53
    - beta.comparknordic.com (http)
    - comparknordic.com, www.comparknordic.com
* Reach router