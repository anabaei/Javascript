<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

// Recognize if we are running in a codespace and under which name
// this is why we forward the CODESPACES ENV vars in our docker-compose file to the container
$isCodespaces = App::env('CODESPACES');
$codespaceName = App::env('CODESPACE_NAME');

$localhostAlias = 'http://localhost:8080';

if ($isCodespaces) {
    $localhostAlias = 'https://' . $codespaceName . '-8080.githubpreview.dev';
}

return [
    // default craft config:
    'defaultWeekStartDay' => 1,
    'omitScriptNameInUrls' => true,
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',
    'securityKey' => App::env('SECURITY_KEY'),
    'devMode' => $isDev,
    'allowAdminChanges' => $isDev,
    'disallowRobots' => !$isProd,

    // custom additions:
    // I don't like usernames, in my experience they are often redundant
    'useEmailAsUsername' => true,

    // We use the @siteUrl alias in the default project, so we can tell craft its baseurl
    'aliases' => [
        '@webroot' => dirname(__DIR__) . '/web',
        '@siteUrl' => $localhostAlias . '/',
    ],
];