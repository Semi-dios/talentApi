<?php

namespace App\Controller;

use App\Repository\BlogRepository;
use App\Entity\Blog;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface;


/**
 * @Route("/api")
 */

class BlogController extends AbstractController
{
   
    private $blogRepository;
    private $security;
    private  $serializer;
    public function __construct(
        BlogRepository $blogRepository,
        Security $security,
        SerializerInterface  $serializer
         )
    {
        $this->blogRepository = $blogRepository;
        $this->security = $security;
        $this->serializer = $serializer;
    }

    /**
     * @Route("/dashboard", name="dashboard" )
     */
    public function index(): JsonResponse
    {   
        $entity_manager = $this->getDoctrine()->getManager();
        $query = $entity_manager->getRepository(Blog::class)->getAllBlogs();
        
        $blogs = $this->serializer->serialize($query,'json');

     
        
        
        return new JsonResponse([
            'blog'=> $this->serializer->serialize($query)
        ],200);
    
       
    }
}
