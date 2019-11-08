<?php

namespace Drupal\simple_gse_search\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

class SearchPage extends ControllerBase {
  protected $searchConfig;

  public function __construct($config) {
    $this->searchConfig = $config->get('simple_gse_search.settings');
  }

  public static function create(ContainerInterface $containerInterface) {
    $config = $containerInterface->get('config.factory');
    return new static($config);
  }

  /**
   * Function responsible for returning the search results page.
   */
  function displaySearchResults() {
    // Display the results returned by Google.
    return [
	    '#title' => isset($_GET['s']) && $_GET['s'] != "" ? 'Search for "'. $_GET['s'] . '"' : 'Search',
      '#type' => 'html_tag',
      '#tag' => 'gcse:searchresults-only',
      '#attributes' => [
        'queryParameterName' => "s",
        'linktarget' => '_parent'
      ],
      // MKS: only display status if there is a search going on
      '#value' => isset($_GET['s']) && $_GET['s'] != "" ? 'Searching for "'. $_GET['s'] . '" ...' : '',
      '#attached' => [
        'library' => ['simple_gse_search/search'],
        'drupalSettings' => [
          'simple_gse_search' => [
            'cx' => $this->searchConfig->get('cx'),
          ]
        ]
      ],
    ];
  }
}
