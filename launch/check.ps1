Write-Host "EarnAtlas Launch Checker"
Write-Host "-----------------------"


$pages=@(
"/",
"/learning/",
"/courses/",
"/assistant/",
"/marketplace/",
"/advertiser/",
"/about/",
"/contact/"
)


foreach($page in $pages){

$url="https://earn-atlas.vercel.app$page"

try{

$response=Invoke-WebRequest $url -Method Head

Write-Host "OK $url"

}

catch{

Write-Host "FAILED $url"

}

}
